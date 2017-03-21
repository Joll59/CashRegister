import React from 'react';
import ReactDOM from 'react-dom';
import Register, {comparison} from './components/Register';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


// describe('comparison', () => {
//   it('should add two numbers', () => {
//     expect(comparison(1, 2)).toBe(3);
//   });
// });
