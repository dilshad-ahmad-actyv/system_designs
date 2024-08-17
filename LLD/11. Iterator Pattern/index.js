// The Iterator Design Pattern is a behavioral design pattern that provides a way to access the elements of a collection sequentially without exposing the underlying representation of the collection. It decouples the iteration mechanism from the collection, allowing you to traverse through the elements without needing to understand the internal structure of the collection.

// Key Concepts
// 1. Iterator: Defines methods to traverse the elements.
// 2. Concrete Iterator: Implements the Iterator interface and keeps track of the current position.
// 3. Aggregate (or Collection): Defines an interface for creating an iterator object.
// 4. Concrete Aggregate (or Concrete Collection): Implements the Aggregate interface and provides an implementation of the iterator.

// Simplified Explanation

// Think of the Iterator Pattern like a playlist on your music player. You want to listen to each song one by one, but you don’t need to know how the playlist is organized internally. You just want to play the next song in the list.

// Real-Life Example: Music Playlist
// Let’s break it down with a music playlist:

// 1. Playlist (Collection): This is where all your songs are stored.
// 2. Iterator(Play Button): This is like the play button on your music player that lets you move from one song to the next.
// 3. Music Player (Client): Uses the iterator to play the songs without worrying about how they are stored.


// Components
// 1. Iterator (Play Button):
// * HasNext(): Checks if there are more songs to play.
// * Next(): Plays the next song.

// 2. Concrete Iterator (Music Player Control):
// * Keeps track of which song is currently playing and knows how to move to the next song.

// 3. Playlist (Music Collection):
// * Stores the songs.
// * Provides an iterator to go through the songs.

// 4. Concrete Playlist (Your Specific Playlist):
// * Implements the playlist and provides the iterator to control the songs.

// Example Code

// 1. Iterator Interface (Play Control):

// public interface Iterator {
//   boolean hasNext();
//   String next();
// }

// 2. Concrete Iterator (Music Player Control):

// public class MusicPlayerIterator implements Iterator {
//   private Playlist playlist;
//   private int index = 0;

//   public MusicPlayerIterator(Playlist playlist) {
//       this.playlist = playlist;
//   }

//   @Override
//   public boolean hasNext() {
//       return index < playlist.getSize();
//   }

//   @Override
//   public String next() {
//       return playlist.getSongAt(index++);
//   }
// }

// 3. Playlist Interface (Collection):

// public interface Playlist {
//   Iterator createIterator();
// }

// 4. Concrete Playlist (Your Playlist):

// public class MyPlaylist implements Playlist {
//   private List<String> songs = new ArrayList<>();

//   public void addSong(String song) {
//       songs.add(song);
//   }

//   public String getSongAt(int index) {
//       return songs.get(index);
//   }

//   public int getSize() {
//       return songs.size();
//   }

//   @Override
//   public Iterator createIterator() {
//       return new MusicPlayerIterator(this);
//   }
// }


// 5. Client (Music Player):

// public class MusicPlayer {
//   public static void main(String[] args) {
//       MyPlaylist playlist = new MyPlaylist();
//       playlist.addSong("Song 1");
//       playlist.addSong("Song 2");
//       playlist.addSong("Song 3");

//       Iterator iterator = playlist.createIterator();
//       while (iterator.hasNext()) {
//           System.out.println("Playing: " + iterator.next());
//       }
//   }
// }


// Summary
// 1. Playlist: Contains the songs (like your collection).
// 2. Iterator: Lets you move through the songs (like the play button).
// 3. Concrete Iterator: Knows how to handle the playlist and keeps track of which song is next.
// 4. Client (Music Player): Uses the iterator to play each song one by one without needing to know how the playlist is managed internally.

// In Simple Terms: The Iterator Pattern is like a music player’s play control. It lets you go through a list of items (like songs) one by one without needing to understand how the items are stored or organized inside the playlist.