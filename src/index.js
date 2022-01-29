import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // div.innerText = inputText;
  const p_tag = document.createElement("p");
  p_tag.innerText = inputText;

  // button（完了）タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    // 完了リストに追加
    const addTarget = completeButton.parentNode;
    // テキスト内容を取得
    const text = addTarget.firstElementChild.innerText;
    // li以下を初期化
    addTarget.textContent = null;
    console.log(addTarget);
  });

  // button（削除）タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p_tag);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
