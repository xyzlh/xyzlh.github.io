// 定义一个空数组，用于存储评论数据
let comments = [];

// 获取评论容器和表单元素
const commentsContainer = document.getElementById('comments-container');
const commentForm = document.getElementById('comment-form');
const authorInput = document.getElementById('author-input');
const contentInput = document.getElementById('content-input');

// 添加提交评论的事件监听
commentForm.addEventListener('submit', function(e) {
  e.preventDefault(); // 阻止表单默认提交行为

  // 获取用户输入的作者和内容
  const author = authorInput.value;
  const content = contentInput.value;

  // 创建一个评论对象
  const comment = {
    author: author,
    content: content
  };

  // 将评论对象添加到数组中
  comments.push(comment);

  // 清空输入框
  authorInput.value = '';
  contentInput.value = '';

  // 更新评论区
  renderComments();
});

// 渲染评论函数
function renderComments() {
  // 清空评论容器
  commentsContainer.innerHTML = '';

  // 循环遍历评论数组，创建每个评论的 HTML 元素，并添加到评论容器中
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];

    // 创建评论的 HTML 元素
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
      <h3 class="author">${comment.author}</h3>
      <p class="content">${comment.content}</p>
    `;

    // 将评论的 HTML 元素添加到评论容器中
    commentsContainer.appendChild(commentElement);
  }
}
