import fitz  # PyMuPDF
from PIL import Image
import os

def extract_pdf_first_page(pdf_path, output_path):
    try:
        # Ensure the output directory exists
        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        # Open the PDF file
        pdf_document = fitz.open(pdf_path)

        # Get the first page
        page = pdf_document[0]  # Zero-based index

        # Render the page to a pixmap
        pixmap = page.get_pixmap()

        # Convert pixmap to an image
        image = Image.frombytes("RGB", [pixmap.width, pixmap.height], pixmap.samples)

        # Save the image as JPEG
        image.save(output_path, "JPEG")

        print(f"First page of {pdf_path} saved as {output_path}")

    except Exception as e:
        print(f"Error: {e}")

# Example usage
pdf_path = "public/news/month1_news.pdf"  # Path to the news PDF file
output_path = "public/previews/month1_preview.jpg"  # Desired output path
extract_pdf_first_page(pdf_path, output_path)