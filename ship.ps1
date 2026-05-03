param (
    [Parameter(Mandatory=$true)]
    [ValidateSet("chrome", "firefox")]
    $browser
)

Write-Host "--- Building VIX for $browser ---" -ForegroundColor Cyan

# Define paths
$extDir = "extension"
$manifestFile = "$extDir\manifest.json"
$templateFile = "$extDir\manifest.$browser.json"
$outputZip = "vix-$browser.zip"

# 1. Swap Manifest
if (Test-Path $templateFile) {
    Copy-Item $templateFile $manifestFile -Force
    Write-Host "[OK] Swapped to $browser manifest."
} else {
    Write-Error "[Error] Template $templateFile not found!"
    exit
}

# 2. ZIP Extension
if (Test-Path $outputZip) { Remove-Item $outputZip -Force }
Compress-Archive -Path "$extDir\*" -DestinationPath $outputZip -Force
Write-Host "[OK] Generated $outputZip" -ForegroundColor Green

# 3. Restore Chrome Manifest (Default for Dev)
Copy-Item "$extDir\manifest.chrome.json" $manifestFile -Force
Write-Host "[OK] Restored local manifest to Chrome (Dev mode)."

Write-Host "--- Build Complete! ---" -ForegroundColor Cyan
