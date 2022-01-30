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
    deleteFromList("incomplete-list", completeButton.parentNode.parentNode);
    // 完了リストに追加
    const addTarget = completeButton.parentNode.parentNode;
    // テキスト内容を取得
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    // li以下を初期化
    addTarget.textContent = null;
    // divタグを生成
    const addDiv = document.createElement("div");
    addDiv.className = "list-row";
    // pタグを生成
    const addP_tag = document.createElement("p");
    addP_tag.innerText = inputText;
    // buttonタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      deleteFromList("complete-list", deleteTarget);
      // テキストを取得
      const text = deleteTarget.firstElementChild.firstElementChild.innerText;
      // li以下を初期化
      deleteTarget.textContent = null;
      // ｐタグにテキストを入力
      p_tag.innerText = text;
      // liタグの子要素に各要素を設定
      deleteTarget.appendChild(div);
      div.appendChild(p_tag);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);

      document.getElementById("incomplete-list").appendChild(deleteTarget);
    });
    //  liタグの子要素を設定
    addTarget.appendChild(addDiv);
    addDiv.appendChild(addP_tag);
    addDiv.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromList("incomplete-list", deleteButton.parentNode.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p_tag);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromList = (list, target) => {
  document.getElementById(list).removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
