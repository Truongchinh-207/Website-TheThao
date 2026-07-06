document.addEventListener("DOMContentLoaded", function() {
    
    const commentForm = document.querySelector(".pure-form");
    const commentList = document.getElementById("comment-list");

    if (commentForm && commentList) {
        commentForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const inputs = commentForm.querySelectorAll(".form-control");
            const name = inputs[0].value.trim();
            const text = inputs[1].value.trim();

            if (name && text) {
                const avatarText = name.substring(0, 2).toUpperCase();
                const item = document.createElement("div");
                item.className = "comment-item";
                item.innerHTML = `
                    <div class="comment-avatar" style="background: #e0e7ff; color: #0066cc; width: 40px; height: 40px; font-weight: 700; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                        ${avatarText}
                    </div>
                    <div class="comment-main" style="margin-left: 16px;">
                        <h5 style="margin: 0 0 4px 0; font-size: 0.95rem; font-weight:600;">${name}</h5>
                        <p style="margin: 0; color: #334155; font-size: 0.95rem;">${text}</p>
                    </div>
                `;
                commentList.appendChild(item);
                inputs[1].value = "";
            }
        });
    }

    // Xử lý thông báo đăng ký thông minh bằng tên trinh
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const targetInput = registerForm.querySelector("input[placeholder='trinh']");
            if (targetInput && targetInput.value.trim() !== "") {
                alert(`🎉 Chúc mừng "${targetInput.value.trim()}" đã gia nhập và kích hoạt thành viên thành công trên VeloSport!`);
            }
        });
    }
});