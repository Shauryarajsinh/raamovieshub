// Replace with your own video data
const videoData = [
    { title: "My First Video", thumbnail: "g.png", videoUrl: "puspa 2.mp4" },
    { title: "Second Video", thumbnail: "https://via.placeholder.com/400x225", videoUrl: "path_to_video/video2.mp4" },
    { title: "Another Video", thumbnail: "https://via.placeholder.com/400x225", videoUrl: "path_to_video/video3.mp4" },
    { title: "Documentary Video", thumbnail: "https://via.placeholder.com/400x225", videoUrl: "path_to_video/video4.mp4" },
];

function loadVideos(videos) {
    const videoListContainer = document.getElementById('video-list');
    videoListContainer.innerHTML = ''; // Clear previous content

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
            <button onclick="playVideo('${video.videoUrl}')">Watch</button>
            <button onclick="downloadVideo('${video.videoUrl}')">Download</button>
        `;
        videoListContainer.appendChild(videoCard);
    });
}

function playVideo(videoUrl) {
    const videoModal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    
    videoSource.src = videoUrl;
    videoPlayer.load();
    videoModal.style.display = 'block';
}

function closeModal() {
    const videoModal = document.getElementById('video-modal');
    videoModal.style.display = 'none';
}

function searchVideos() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredVideos = videoData.filter(video =>
        video.title.toLowerCase().includes(query)
    );
    loadVideos(filteredVideos);
}

function downloadVideo(videoUrl) {
    const a = document.createElement('a');
    a.href = videoUrl;
    a.download = videoUrl.split('/').pop(); // Use the last part of the URL as the filename
    a.click();
}

// Initial load of all videos
loadVideos(videoData);
