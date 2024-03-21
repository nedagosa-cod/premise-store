from PIL import Image # python3 -m pip install Pillow

import os

folderImgOriginal = os.path.dirname(os.path.abspath(__file__)) + '\\img\\'
folderImgCompress = os.path.dirname(os.path.abspath(__file__)) + '\\compress\\'

if __name__ == "__main__":
    for filename in os.listdir(folderImgOriginal):
        name, extension = os.path.splitext(folderImgOriginal + filename)

        if extension in [".jpg", ".jpeg", ".png", ".JPG"]:
            picture = Image.open(folderImgOriginal + filename)
            picture.save(folderImgCompress + filename, optimize=True, quality=60)
