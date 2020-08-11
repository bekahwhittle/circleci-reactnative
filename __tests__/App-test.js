/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
// Test pass or fail
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
