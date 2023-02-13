import { reject } from 'lodash';

function createMessage(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject('Name should be specified');
    } else {
      resolve(`Hello, ${name}`);
    }
  });
}

async function greetings() {
  try {
    const message1 = await createMessage('Rostyslav');
    console.log(message1);

    const message2 = await createMessage('Vlad');
    console.log(message2);

    const message3 = await createMessage();
    console.log(message3);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Finish!!!!!!!!!');
  }
}

// greetings();

// ----------------

async function formatMessage(message) {
  return message.trim().toLowerCase();
}

formatMessage('          MeSsAge 1      ').then((message) => {
  console.log(message);
});

const fn1 = async function () {};
const fn2 = async () => {};
document.body.addEventListener('click', async () => {});
