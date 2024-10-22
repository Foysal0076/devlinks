// Function to check if an image is valid based on resolution and size

const isValidImage = ({
  file,
  maxWidth,
  maxHeight,
  maxSize,
}: {
  file: File
  maxWidth: number
  maxHeight: number
  maxSize: number
}): Promise<{ isValid: boolean; message: string } | false> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      const isValidWidth = img.width <= maxWidth
      const isValidHeight = img.height <= maxHeight
      const isValidSize = file.size <= maxSize * 1024 * 1024
      const messages = [
        !(isValidWidth && isValidHeight)
          ? `Please upload an image with a resolution up to ${maxWidth}x${maxHeight}.`
          : null,
        isValidSize
          ? null
          : `Please upload an image with a maximum size of ${maxSize}MB.`,
      ].filter(Boolean)

      resolve(
        messages.length > 0
          ? { isValid: false, message: messages.join('\n') }
          : false
      )
    }
    img.onerror = () => {
      resolve(false)
    }
    img.src = URL.createObjectURL(file)
  })
}

export default isValidImage
