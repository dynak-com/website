const url = '/health_check';

export default function onSendCheckStatusRequest(onSetState) {
  fetch(url, {
    method: 'GET'
  })
    .then(res => {
      console.log(`Response status: ${res.status}`);
      return res.text();
    })
    .then(res => {
      console.log(`Body: ${res}`);
      onSetState({ loading: false, status: res });
    })
    .catch(error => {
      console.log(error);
      onSetState({ loading: false, status: 'Not OK' });
    });
}
