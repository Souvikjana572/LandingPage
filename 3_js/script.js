document.addEventListener('DOMContentLoaded', () => {
    const backgroundSlideshow = document.getElementById('background-slideshow');
    const photoTitle = document.getElementById('photo-title');

    // Simulated photo data (replace with actual API call)
    const photos = [
        { id: 1, url: 'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Lamborghini' },
        { id: 2, url: 'https://media.istockphoto.com/id/174683065/photo/red-sport-car-on-black-background.jpg?s=612x612&w=0&k=20&c=h2m9Sxjv4mmTKtfRbNhzzY6ig-MWAUAqRVofWePKVwQ=', title: 'ferrari' },
        { id: 3, url: 'https://media.istockphoto.com/id/109722564/photo/black-sports-car.jpg?s=612x612&w=0&k=20&c=l1KX-5mySBH7VRopDzlYwbGq4EtZ-qJYqGtY3Fsvpic=', title: 'Audi' },
        { id: 4, url: 'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/08/429761640_918756733219623_1569188979399511301_n.jpg', title: 'Pagani' },
        // Add more photo objects as needed
    ];

    // Background slideshow functionality
    let currentPhotoIndex = 0;

    function changeBackgroundPhoto() {
        const photo = photos[currentPhotoIndex];
        backgroundSlideshow.style.backgroundImage = `url('${photo.url}')`;
        photoTitle.textContent = photo.title;
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    }

    // Initial background photo
    changeBackgroundPhoto();

    // Change background photo every 2 seconds
    setInterval(changeBackgroundPhoto, 3000);
});
