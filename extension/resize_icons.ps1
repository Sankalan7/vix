Add-Type -AssemblyName System.Drawing
$sourcePath = "C:\Users\HP\Desktop\Projects\debugger\extension\icon.png"
$img = [System.Drawing.Image]::FromFile($sourcePath)

function Resize-Image($size) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $size, $size)
    $bmp.Save("C:\Users\HP\Desktop\Projects\debugger\extension\icon_$($size).png", [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

Resize-Image 16
Resize-Image 48
Resize-Image 128

$img.Dispose()
