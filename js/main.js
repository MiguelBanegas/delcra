document.addEventListener('DOMContentLoaded', () => {
    // Paleta de colores basada en los tonos existentes del proyecto (azules y grises)
    const colors = ['#e0f2f7', '#c7e2ec', '#005a9c', '#34495e', '#6c757d'];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomColor() {
        return colors[getRandomInt(0, colors.length - 1)];
    }

    function generateRandomRadialGradient() {
        let gradientString = '';
        const numberOfGradients = getRandomInt(2, 4); // Variar el número de gradientes radiales

        for (let i = 0; i < numberOfGradients; i++) {
            const posX = getRandomInt(10, 90); // Posición X aleatoria
            const posY = getRandomInt(10, 90); // Posición Y aleatoria
            const color = getRandomColor();
            const transparencyStop = getRandomInt(30, 70); // Punto de transparencia aleatorio
            const size = getRandomInt(40, 80); // Tamaño del gradiente radial aleatorio

            gradientString += `radial-gradient(at ${posX}% ${posY}%, ${color} 0%, transparent ${size}%)`;
            if (i < numberOfGradients - 1) {
                gradientString += ', ';
            }
        }
        return gradientString;
    }

    const body = document.body;
    // Establecer un color de fondo base muy claro de la paleta
    body.style.backgroundColor = colors[getRandomInt(0, 1)];
    body.style.backgroundImage = generateRandomRadialGradient();
});