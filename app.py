from fastapi import FastAPI, UploadFile, File
from PIL import Image, ImageDraw
import io
import torch
import os
import base64

app = FastAPI()

# Load the YOLOv5 model
model = torch.hub.load('ultralytics/yolov5', 'custom', 'best.pt')

@app.post("/detect/")
async def detect_objects(file: UploadFile = File(...)):
    image = Image.open(io.BytesIO(file.file.read()))
    
    # Perform object detection using YOLOv5
    results = model(image)
    detected_objects = results.pred[0]

    # Extract relevant information from the detection results
    object_info = []
    for det in detected_objects:
        label = model.names[int(det[5])]
        confidence = float(det[4])
        bounding_box = det[:4].tolist()
        object_info.append({"label": label, "confidence": confidence, "bounding_box": bounding_box})

    # Draw bounding boxes on the image
    draw = ImageDraw.Draw(image)
    for obj in object_info:
        label = obj["label"]
        bounding_box = obj["bounding_box"]
        draw.rectangle(bounding_box, outline="#7fff00", width=3)
        draw.text((bounding_box[0], bounding_box[1]), f"{label} - {obj['confidence']:.2f}", fill="black")

    # Save the image with bounding boxes
    output_path = "detected_image.jpg"
    image.save(output_path)

    # Convert the image to base64
    with open(output_path, "rb") as image_file:
        base64_image = base64.b64encode(image_file.read()).decode("utf-8")

    return image
