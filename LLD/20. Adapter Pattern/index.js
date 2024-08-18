// The Adapter Design Pattern is a structural design pattern that allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by converting the interface of a class into another interface that the client expects. This pattern helps to integrate new features into existing systems without modifying their code.

// Key Concepts
// Target Interface: The interface that the client code expects and interacts with.
// Adaptee: The existing class that has an incompatible interface. This is the class that needs to be adapted.
// Adapter: A class that implements the target interface and translates requests to the adaptee, effectively adapting the adaptee’s interface to be compatible with the target interface.
// Real-Life Example: Electrical Plug Adapter
// Imagine you are traveling to a country with different electrical plug standards. You have a device with a plug that is incompatible with the local sockets. An electrical plug adapter can be used to connect your device’s plug to the local sockets.

// Target Interface: The plug socket in your country.
// Adaptee: The plug of your device.
// Adapter: The electrical plug adapter that fits both the local socket and your device’s plug.

// ### Real-Life Example: **Media Player and Audio Formats**

// Imagine you are developing a media player software that needs to play various audio formats. You have an existing media player that can only play MP3 files. Now, you want to extend it to support playing WAV files as well. Instead of modifying the existing media player, you can use an adapter to make it work with the new audio format.

// ### Components

// 1. **Target Interface:** The interface that the client code (the media player) expects. In this case, it’s the `MediaPlayer` interface that defines methods for playing media files.

// 2. **Adaptee:** The existing class or system that needs to be adapted. In this case, it’s a `WavPlayer` class that can play WAV files but doesn’t fit the `MediaPlayer` interface.

// 3. **Adapter:** A class that implements the `MediaPlayer` interface and uses the `WavPlayer` to play WAV files, thus adapting it to work with the existing media player.

// ### Building the Software

// 1. **Define the Target Interface (`MediaPlayer`):**

//    This is the interface that the media player uses to play different types of audio files.

//    ```typescript
//    interface MediaPlayer {
//        play(filename: string): void;
//    }
//    ```

// 2. **Implement the Adaptee (`WavPlayer`):**

//    This is the class that can play WAV files but doesn’t fit the `MediaPlayer` interface.

//    ```typescript
//    class WavPlayer {
//        public playWav(filename: string): void {
//            console.log(`Playing WAV file: ${filename}`);
//        }
//    }
//    ```

// 3. **Create the Adapter (`WavAdapter`):**

//    The adapter implements the `MediaPlayer` interface and uses an instance of `WavPlayer` to play WAV files.

//    ```typescript
//    class WavAdapter implements MediaPlayer {
//        private wavPlayer: WavPlayer;

//        constructor(wavPlayer: WavPlayer) {
//            this.wavPlayer = wavPlayer;
//        }

//        public play(filename: string): void {
//            this.wavPlayer.playWav(filename);
//        }
//    }
//    ```

// 4. **Implement the Existing Media Player (`Mp3Player`):**

//    This media player can play MP3 files and uses the `MediaPlayer` interface.

//    ```typescript
//    class Mp3Player implements MediaPlayer {
//        public play(filename: string): void {
//            console.log(`Playing MP3 file: ${filename}`);
//        }
//    }
//    ```

// 5. **Client Code:**

//    Demonstrates how the media player uses the adapter to play WAV files.

//    ```typescript
//    class MediaPlayerDemo {
//        public static main(): void {
//            const mp3Player: MediaPlayer = new Mp3Player();
//            mp3Player.play('song1.mp3'); // Output: Playing MP3 file: song1.mp3

//            const wavPlayer: WavPlayer = new WavPlayer();
//            const wavAdapter: MediaPlayer = new WavAdapter(wavPlayer);
//            wavAdapter.play('song2.wav'); // Output: Playing WAV file: song2.wav
//        }
//    }

//    // Run the MediaPlayerDemo example
//    MediaPlayerDemo.main();
//    ```

// ### Explanation

// 1. **Target Interface (`MediaPlayer`):** Defines a `play` method that the client code uses to play media files. The client does not need to know about the specifics of the audio format.

// 2. **Adaptee (`WavPlayer`):** Can play WAV files but does not fit the `MediaPlayer` interface directly.

// 3. **Adapter (`WavAdapter`):** Implements the `MediaPlayer` interface and translates calls to `play` into calls to the `WavPlayer`’s `playWav` method.

// 4. **Client Code (`MediaPlayerDemo`):** Uses both the `Mp3Player` and the `WavAdapter` to play different types of audio files, demonstrating how the adapter allows the media player to work with new formats without changing its code.

// ### Benefits

// - **Flexibility:** You can add new audio formats by creating new adapters without modifying the existing media player code.
// - **Integration:** Allows integration of new systems or components into existing ones by adapting their interfaces.
// - **Maintainability:** Keeps the existing codebase clean and maintainable by encapsulating the adaptation logic in separate classes.

// ### Summary

// The Adapter Design Pattern allows different interfaces to work together by introducing an adapter that translates between them. In the media player example, the adapter (`WavAdapter`) allows the existing media player to play new audio formats (WAV) without changing its core functionality. This pattern is useful for integrating new features or systems in a way that maintains compatibility with existing code.