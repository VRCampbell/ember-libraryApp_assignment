import Controller from '@ember/controller';
import { gte, match, not, and } from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',
  message: '',

  isLongEnough: gte('message.length', 1),
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isBothTrue: and('isLongEnough', 'isValid'),
  isDisabled: not('isBothTrue'),

  actions: {
    sendMessage() {
      alert(`Sending of: ${this.get('message')} , to ${this.get('emailAddress')}`);
      this.set('responseMessage', `We got your message and we'll be in touch soon.`);
      this.set('emailAddress', '');
      this.set('message', '')
    }
  }
});
