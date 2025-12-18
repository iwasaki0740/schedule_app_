document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const groupNameDisp = document.getElementById('group-name');
    const createGroupBtn = document.getElementById('create-group-btn');
    const joinGroupBtn = document.getElementById('join-group-btn');
    const inviteBtn = document.getElementById('invite-btn');

    // --- 1. データの読み込み (保存されていたら表示) ---
    const savedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    const savedGroup = localStorage.getItem('currentGroup') || '個人用';

    groupNameDisp.textContent = savedGroup;
    if (savedGroup !== '個人用') inviteBtn.style.display = 'inline-block';

    savedTasks.forEach(taskText => {
        renderTask(taskText);
    });

    // --- 2. タスクを画面に表示する共通関数 ---
    function renderTask(taskText) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.style.cssText = "display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #eee; list-style: none;";
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="del-item-btn" style="background:#ff4d4d; color:white; border:none; border-radius:4px; cursor:pointer;">削除</button>
        `;

        li.querySelector('.del-item-btn').addEventListener('click', () => {
            li.remove();
            saveAllData(); // 削除したら保存
        });
        todoList.appendChild(li);
    }

    // --- 3. データの保存用関数 ---
    function saveAllData() {
        const tasks = [];
        document.querySelectorAll('.todo-item span').forEach(span => {
            tasks.push(span.textContent);
        });
        localStorage.setItem('myTasks', JSON.stringify(tasks));
        localStorage.setItem('currentGroup', groupNameDisp.textContent);
    }

    // --- 4. 追加ボタンの動作 ---
    addBtn.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;
        renderTask(taskText);
        saveAllData(); // 追加したら保存
        todoInput.value = "";
    });

    // --- 5. グループ作成・参加 ---
    createGroupBtn.addEventListener('click', () => {
        const name = prompt("グループ名:");
        if (name) {
            groupNameDisp.textContent = name;
            inviteBtn.style.display = 'inline-block';
            saveAllData();
        }
    });

    joinGroupBtn.addEventListener('click', () => {
        const code = prompt("招待コード:");
        if (code && code.startsWith("GRP-")) {
            groupNameDisp.textContent = `共有中: ${code}`;
            inviteBtn.style.display = 'inline-block';
            saveAllData();
        }
    });

    // ログアウト
    logoutBtn.addEventListener('click', () => {
        if (confirm("ログアウトしますか？")) window.location.href = 'login.html';
    });
});