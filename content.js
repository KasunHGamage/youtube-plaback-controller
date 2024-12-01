(function () {
    const adjustSpeed = (delta) => {
      const video = document.querySelector('video');
      if (video) {
        // Adjust the playback speed
        video.playbackRate = Math.min(Math.max(video.playbackRate + delta, 0.25), 4); // Range: 0.25x to 4x
        // Show the current speed on screen temporarily
        showSpeedOverlay(video.playbackRate);
      }
    };
  
    const showSpeedOverlay = (speed) => {
      let overlay = document.getElementById('speed-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'speed-overlay';
        overlay.style.position = 'fixed';
        overlay.style.bottom = '50%';
        overlay.style.left = '50%';
        overlay.style.transform = 'translate(-50%, -50%)';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.color = '#fff';
        overlay.style.padding = '10px 20px';
        overlay.style.borderRadius = '5px';
        overlay.style.fontSize = '20px';
        overlay.style.zIndex = '10000';
        document.body.appendChild(overlay);
      }
      overlay.textContent = `Speed: ${speed.toFixed(2)}x`;
      overlay.style.display = 'block';
  
      clearTimeout(overlay.timeout);
      overlay.timeout = setTimeout(() => {
        overlay.style.display = 'none';
      }, 1000);
    };
  
    // Listen for keydown events
    document.addEventListener('keydown', (event) => {
      const isModifierPressed = event.metaKey || event.ctrlKey; // Command (metaKey) for macOS, Ctrl (ctrlKey) for others
      if (isModifierPressed && event.key === 'ArrowUp') {
        event.preventDefault(); // Prevent default browser behavior
        adjustSpeed(0.25); // Increase speed by 0.25x
      } else if (isModifierPressed && event.key === 'ArrowDown') {
        event.preventDefault(); // Prevent default browser behavior
        adjustSpeed(-0.25); // Decrease speed by 0.25x
      }
    });
  })();