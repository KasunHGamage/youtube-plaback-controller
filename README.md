# YouTube Playback Speed Controller

A simple Chrome extension that allows you to control the playback speed of YouTube videos using **Command + Arrow keys** (macOS) or **Ctrl + Arrow keys** (Windows/Linux). Adjust the video speed on the fly with ease and enjoy a smoother video-watching experience!

## Features
- **Increase/Decrease Playback Speed**: Use `Command + Arrow Up` (macOS) or `Ctrl + Arrow Up` (Windows/Linux) to increase the playback speed, and `Command + Arrow Down` or `Ctrl + Arrow Down` to decrease it.
- **Playback Speed Range**: The playback speed can be adjusted from **0.25x** to **4x**.
- **Temporary Speed Overlay**: A visual overlay appears briefly on the screen to show the current playback speed.
- **Cross-platform Compatibility**: Works seamlessly on both macOS and Windows/Linux.

## Installation

To install the **YouTube Playback Speed Controller** extension in Chrome:

1. **Download the Extension Files**: Clone or download this repository as a ZIP file.

2. **Enable Developer Mode in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** in the top-right corner.

3. **Load the Extension**:
   - Click **Load unpacked**.
   - Select the folder containing the extension files.

4. **Start Using the Extension**:
   - Open a YouTube video.
   - Use `Command + Arrow Up` or `Command + Arrow Down` on macOS, or `Ctrl + Arrow Up` or `Ctrl + Arrow Down` on Windows/Linux to control the playback speed.

## How It Works
- **Speed Adjustment**: The extension adjusts the `playbackRate` property of the video element on YouTube. The speed can be increased or decreased by 0.25x each time the key combination is pressed.
- **Speed Overlay**: A temporary overlay displays the current speed, allowing users to know the speed they are watching at without needing to pause the video.

## Supported Keys
- **macOS**: `Command + Arrow Up` (increase speed), `Command + Arrow Down` (decrease speed)
- **Windows/Linux**: `Ctrl + Arrow Up` (increase speed), `Ctrl + Arrow Down` (decrease speed)

## Limitations
- This extension only works on YouTube videos embedded in the standard YouTube player.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Example of Usage:
- **Increase speed**: `Command + Arrow Up` (macOS) or `Ctrl + Arrow Up` (Windows/Linux).
- **Decrease speed**: `Command + Arrow Down` (macOS) or `Ctrl + Arrow Down` (Windows/Linux).

## Contributing

1. Fork this repository.
2. Make your changes or improvements.
3. Open a pull request, and we’ll review it!