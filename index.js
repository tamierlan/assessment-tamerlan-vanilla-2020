// let params = encodeURIComponent("Is today going to be a good day?");
// let uri = "https://8ball.delegator.com/magic/JSON/" + params;
// fetch(uri)
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//   });
const div = document.querySelector('.banner');
const p = document.querySelector('p');
const history_wrapper = document.querySelector('.history');
const input = document.querySelector('input');
const button = document.querySelector('button');
const history = [];
div.innerHTML = '<img src="https://8ball.delegator.com/images/8ball.png" height="330px" alt="banner" />';



button.addEventListener('click', () => {
  let params = input.value;

  if (!params) {
    alert('Please type your question!')
    return
  }
  if (params.trim().split('').pop() !== '?') {
    alert('Please include ( ? ) mark at the end!')
    return
  }

  div.innerHTML = '<img src="https://media.giphy.com/media/IwSG1QKOwDjQk/giphy.gif" width="718px" height="350px" alt="loading" />';
  let uri = "https://8ball.delegator.com/magic/JSON/" + params;
  fetch(uri)
    .then(res => res.json())
    .then(json => setData(json.magic.answer));
})




const make_history = (datas) => {
  history_wrapper.innerHTML = ''
  history.push(datas)
  history.forEach(item => {
    const item_element = document.createElement('div')
    item_element.innerHTML = item;
    item_element.className = 'item'
    history_wrapper.appendChild(item_element)
  })
}

const setData = (params) => {
  setTimeout(() => {
    div.innerHTML = '<img src="https://8ball.delegator.com/images/8ball.png" height="330px" alt="banner" />';
    p.innerHTML = params
    make_history(params)
  }, 500)
}
