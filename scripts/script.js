// 获取 flowerContainer 元素
const flowerContainer = document.getElementById('flowerContainer');

// 从 JSON 文件加载花朵数据
fetch('./flowers.json') // 使用相对路径
    .then(response => response.json())
    .then(flowers => {
        // 循环遍历花朵数据
        flowers.forEach(flower => {
            // 创建花朵元素
            const flowerElement = document.createElement('div');
            flowerElement.classList.add('flower');
            flowerElement.onclick = function() {
                showModal(flower.image, flower.name, flower.description);
            };

            // 创建图片元素
            const imgElement = document.createElement('img');
            imgElement.src = flower.image;
            imgElement.alt = flower.name;
            flowerElement.appendChild(imgElement);

            // 创建标题元素
            const titleElement = document.createElement('h3');
            titleElement.textContent = flower.name;
            flowerElement.appendChild(titleElement);

            // 创建描述元素
            const descElement = document.createElement('p');
            descElement.textContent = flower.description;
            flowerElement.appendChild(descElement);

            // 将花朵元素添加到 flowerContainer 中
            flowerContainer.appendChild(flowerElement);
        });
    })
    .catch(error => {
        console.error('Error loading flowers:', error);
    });

// 显示大图模态框
function showModal(image, name, description) {
    const modal = document.getElementById('flowerModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = image;
    modalImg.alt = name;
    captionText.innerHTML = `<h3>${name}</h3><p>${description}</p>`;
}

// 关闭大图模态框
function closeModal() {
    const modal = document.getElementById('flowerModal');
    modal.style.display = 'none';
}

// 点击模态框以外的地方关闭模态框
window.onclick = function(event) {
    const modal = document.getElementById('flowerModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
