document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('toggle-password');
    const errorMessage = document.getElementById('error-message');
    const submitBtn = document.querySelector('.login-btn');
    const togglePasswordBtn = document.getElementById('toggle-password');

    togglePasswordBtn.addEventListener('click', function () {
        // 現在のタイプを確認
        const type = passwordInput.getAttribute('type');

        if (type === 'password') {
            // テキストに変更（パスワードが見える）
            passwordInput.setAttribute('type', 'text');
            this.textContent = '非表示';
        } else {
            // パスワードに戻す（伏せ字になる）
            passwordInput.setAttribute('type', 'password');
            this.textContent = '表示';
        }
    });
    // 2. ログイン処理
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // エラーを隠し、ボタンを無効化（連打防止）
        errorMessage.style.display = 'none';
        submitBtn.disabled = true;
        submitBtn.textContent = 'ログイン中...';

        const email = document.getElementById('email').value;
        const password = passwordInput.value;

        // 通信中を演出するための疑似的な待ち時間（1秒）
        await new Promise(resolve => setTimeout(resolve, 1000));

        // ログイン判定（テスト用）
        // ...（ログイン判定部分）...
        if (email === "test@example.com" && password === "1234") {
            alert("ログイン成功！");
            // ここを index.html に変更
            window.location.href = 'index.html';
        } else {
            // 失敗：エラーメッセージを表示
            errorMessage.style.display = 'block';
            submitBtn.disabled = false;
            submitBtn.textContent = 'ログイン';

            // 入力欄を赤くするなどの演出
            passwordInput.style.borderColor = '#d93025';
        }
    });
});
