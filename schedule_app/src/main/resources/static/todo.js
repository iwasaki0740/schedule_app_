const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const logoutBtn = document.getElementById('logout-btn');
const groupNameDisp = document.getElementById('group-name');
const createGroupBtn = document.getElementById('create-group-btn');
const inviteBtn = document.getElementById('invite-btn');
const joinGroupBtn = document.getElementById('join-group-btn');

// 1. タスクを追加する関数
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === "") return; // 空なら何もしない

    // リストアイテム(li)を作成
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">削除</button>
    `;

    // 削除ボタンの機能
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    // リストに追加
    todoList.appendChild(li);
    todoInput.value = ""; // 入力欄を空にする
}

// 追加ボタンクリックで実行
addBtn.addEventListener('click', addTask);

// エンターキーでも追加できるようにする
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// --- グループ作成機能 ---
createGroupBtn.addEventListener('click', () => {
    const newGroupName = prompt("新しいグループ名を入力してください:");

    if (newGroupName) {
        // 本来はここでサーバーにグループを登録し、ユニークなIDを受け取ります
        const mockGroupId = "GRP-" + Math.random().toString(36).substring(2, 7).toUpperCase();

        groupNameDisp.textContent = newGroupName;
        inviteBtn.style.display = "inline-block"; // 招待ボタンを表示

        // 招待ボタンにIDを持たせる
        inviteBtn.onclick = () => {
            alert(`招待コード: ${mockGroupId}\nこのコードをメンバーに共有してください。`);
        };

        alert(`グループ「${newGroupName}」を作成しました！`);
    }
});

joinGroupBtn.addEventListener('click', () => {
    const inviteCode = prompt("招待コードを入力してください（例: GRP-XXXXX）:");

    if (inviteCode) {
        // 本来はここでサーバーへコードを送り、実在するグループか確認します
        // 今回は動作確認のため、入力されたら「共有グループ」に切り替わるようにします

        if (inviteCode.startsWith("GRP-")) {
            groupNameDisp.textContent = `共有グループ (${inviteCode})`;
            inviteBtn.style.display = "inline-block"; // 参加後も他の人を誘えるようにする

            alert("グループに参加しました！タスクが同期されます（シミュレーション）");

            // 参加後、招待ボタンの内容を更新
            inviteBtn.onclick = () => {
                alert(`このグループの招待コード: ${inviteCode}`);
            };
        } else {
            alert("無効な招待コードです。「GRP-」から始まるコードを入力してください。");
        }
    }
});

// ログアウト処理
// ...（ログアウトボタンの処理部分）...
logoutBtn.addEventListener('click', () => {
    if (confirm("ログアウトしますか？")) {
        // ここを login.html に変更
        window.location.href = 'login.html';
    }
});