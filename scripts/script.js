// 显示模态框
function showModal(imgSrc, imgAlt, captionText) {
    const modal = document.getElementById("flowerModal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
    caption.innerHTML = captionText;
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById("flowerModal");
    modal.style.display = "none";
}

// 点击模态框外部区域关闭模态框
window.onclick = function(event) {
    const modal = document.getElementById("flowerModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
