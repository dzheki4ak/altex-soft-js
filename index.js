import nameList from './name.list.js';

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const selectLetter = [];
const optionElements = [];
const liElem = [];

const filterElem = document.createElement('div');
filterElem.classList = 'filter';

const selectElem = document.createElement('select');
selectElem.classList = 'letter__dropdown';

const bodyEl = document.querySelector('body');

bodyEl.append(selectElem);
bodyEl.append(filterElem);

const randomLetterFunction = () => {
  const randomNum = Math.floor(Math.random() * abc.length);
  return randomNum;
};

for (let i = 0; i <= 5; i++) {
  selectLetter.push(abc[randomLetterFunction()]);
}
for (let i = 0; i < selectLetter.length; i++) {
  optionElements[i] = document.createElement('option');
}
optionElements.map((el, index) => {
  el.textContent = selectLetter[index];
  el.classList = 'letter__option';
});
optionElements[0].textContent = 'Select a letter';

selectElem.append(...optionElements);

const unOrdListElem = document.createElement('ul');
unOrdListElem.classList = 'name__list_list';

for (let i = 0; i < nameList.length; i++) {
  liElem[i] = document.createElement('li');
}

liElem.map((el, index) => {
  el.textContent = nameList[index].name;
  el.classList = 'name__list_item';
});

const noMatchesMsg = document.createElement('h3');
noMatchesMsg.classList = 'no__matches_msg';
noMatchesMsg.textContent = 'NO MATCHES :(';

let selectedOption = '';

const handleSelectionChange = event => {
  event.preventDefault();
  selectedOption = event.target.value;
  const filterredList = liElem.filter(
    el =>
      el.textContent.slice(0, 1).toLowerCase() ===
      selectedOption.toLowerCase(),
  );

  unOrdListElem.append(...filterredList);

  filterElem.append(
    filterredList.length > 0 ? unOrdListElem : noMatchesMsg,
  );
};

const onContentReset = () => {
  unOrdListElem.innerHTML = '';
  const noMatchToRemove = document.querySelector('.no__matches_msg');
  if (noMatchToRemove) {
    filterElem.removeChild(noMatchesMsg);
  }
};

selectElem.addEventListener('change', onContentReset);
selectElem.addEventListener('change', handleSelectionChange);
