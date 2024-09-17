// JavaScript to toggle checked/unchecked state and play sound
const habitButton = document.getElementById('habit-button');

// Reference to the sound file
const sound = new Audio('super-mario-coin-sound.mp3');

habitButton.addEventListener('click', function() {
    // Toggle the "checked" class to change the color
    habitButton.classList.toggle('checked');
    
    // Play sound only if the button is checked (task complete)
    if (habitButton.classList.contains('checked')) {
        sound.play(); // Play sound when task is completed
    }

    // Add the pop animation class
    habitButton.classList.add('animate-pop');

    // Remove the "animate-pop" class after the animation is done (0.5s)
    setTimeout(() => {
        habitButton.classList.remove('animate-pop');
    }, 500); // Same as the animation duration (0.5s)
});
