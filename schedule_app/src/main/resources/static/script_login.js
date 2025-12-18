// フォーム要素を取得
const loginForm = document.getElementById('login-form');

// フォームが送信（Submit）された時の処理
loginForm.addEventListener('submit', function(event) {
    // 1. ページのリロードを防ぐ（デフォルトの動作をキャンセル）
    event.preventDefault();

    // 2. 入力された値を取得
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 3. 簡易的なバリデーション（空チェックはHTMLのrequiredで済んでいるので、ここでは中身を確認）
    console.log("ログイン試行:", email);

    // 【開発用ヒント】本来はここでAPI（サーバー）にデータを送ります
    // 今回は例として、特定のアドレスで「ログイン成功」をシミュレーションします
    if (email === "test@example.com" && password === "1234") {
        alert("ログイン成功！TODOリストへ移動します。");
        
        // 4. TODOリスト画面へ遷移（実際のファイル名に合わせて変更してください）
        // window.location.href = 'todo.html'; 
    } else {
        // 5. エラー表示
        alert("メールアドレスまたはパスワードが違います。\n(テスト用: test@example.com / 1234)");
    }
});
