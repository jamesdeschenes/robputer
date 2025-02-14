const options = {
    // Optional. An object representing the initial skin to use.
    // If omitted, the default skin, included in the bundle, will be used.
    // Note: This URL must be served the with correct CORs headers.
    initialSkin: {
      url: "./other/RobAmp.wsz",
    },
  
    // Optional. An array of `track`s (see above) to prepopulate the playlist with.
    initialTracks: [
        {url: '/sound/restricted/music_01.mp3'},
        {url: '/sound/restricted/music_02.mp3'}
    ],
  
    // Optional. An array of objects representing skins.
    // These will appear in the "Options" menu under "Skins".
    // Note: These URLs must be served with the correct CORs headers.
    // availableSkins: [
    //   { url: "./green.wsz", name: "Green Dimension V2" },
    //   { url: "./osx.wsz", name: "Mac OSX v1.5 (Aqua)" },
    // ],
  
    // Optional. An object representing the initial layout of the windows.
    // Valid keys are `main`, `equalizer`, `playlist` and `milkdrop`. All windows
    // are optional.
    //
    // - Each provided window must specify a `position` object with `top` and
    //   `left` which specify pixel offsets.
    // - Each provided window, except for
    // `milkdrop` may specify a `shadeMode` boolean.
    // - Each provided window may specify a `closed` boolean.
    // - The playlist and milkdrop windows may specify a `size` object with
    //   `extraHeight` and `extraWidth`.
    //
    // **Note:** After windows are positioned, they are then centered _as a group_
    // within the DOM element that Webamp is rendered into.
    //
    // **Since** @next
    windowLayout: {
      main: {
        position: { top: 0, left: 0 },
        shadeMode: false,
        closed: false,
      },
      equalizer: {
        position: { top: 0, left: 0 },
        shadeMode: true,
        closed: false,
      },
      playlist: {
        position: { top: 0, left: 0 },
        shadeMode: false,
        // Number of additional sprites by which to expand the window.
        size: { extraHeight: 1, extraHeight: 10 },
        closed: false,
      },
    },
  
    // Optional. (Default: `false`) Should double size mode be enabled?
    // **Note:** In keeping with the original Winamp, double size mode
    // does not apply to resizable windows like the equalizer or Milkdrop.
    //
    // **Since** @next
    // enableDoubleSizeMode: true,
  
    // Optional. (Default: `false`) Should global hotkeys be enabled?
    // enableHotkeys: true,
  
    // Optional. (Default: `0`) The zIndex that Webamp should use.
    zIndex: 8,
  
    // Optional. An array of additional file pickers.
    // These will appear in the "Options" menu under "Play".
    // In the demo site, This option is used to provide a "Dropbox" file
    // picker.
    // filePickers: [
    //   {
    //     // The name that will appear in the context menu.
    //     contextMenuName: "My File Picker...",
    //     // A function which returns a Promise that resolves to
    //     // an array of `track`s (see above)
    //     filePicker: () =>
    //       Promise.resolve([
    //         {
    //           url: "./rick_roll.mp3",
    //         },
    //       ]),
    //     // A boolean indicating if this options should be made
    //     // available when the user is offline.
    //     requiresNetwork: true,
    //   },
    // ],
  
    // Optional. Provide a custom way to derive `Track` objects from a drop event.
    // Useful if your website has some DOM representation of a track that you can map to a URL/blob.
    handleTrackDropEvent: async (e) => {
      // Return an array of `Track` objects, see documentation below, or `null` to get the default drop behavior.
      // You may optionally wrap the return value in a promise.
    },
  
    // // Optional. Provide a way to extend the behavior of the button ADD URL.
    // // **Since** 1.4.1
    // handleAddUrlEvent: async () => {
    //   // Return an optional array of `Track` objects or null.
    // },
  
    // // Optional. Provide a way to extend the behavior of the playlist button LOAD LIST.
    // // **Since** 1.4.1
    // handleLoadListEvent: async () => {
    //   // Return an optional array of `Track` objects or null.
    // },
  
    // // Optional. Provide a way to extend the behavior of the playlist button SAVE LIST.
    // // Where tracks: Track[]
    // // **Since** 1.4.1
    // handleSaveListEvent: (tracks) => {},
  };
  const webamp = new Webamp(options);

// Get the button that will open the Webamp instance.
const robampButton = document.getElementById('robamp-button');


let robAmpHasBeenLaunched = false;

robampButton.addEventListener('click', () => {
    // Render after the skin has loaded.
    if (robAmpHasBeenLaunched === false) {
        robAmpHasBeenLaunched = true;
        webamp.renderWhenReady(document.getElementById('robamp'));
    } else {
        webamp.reopen();        
    }
});
