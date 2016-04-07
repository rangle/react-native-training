import React, { TouchableOpacity, Text } from 'react-native';
import { shallow } from 'enzyme';
import Button from '../src/components/ui/Button';
import { expect } from 'chai';
import sinon from 'sinon';
import defaultStyles from '../src/styles';

describe('<Button />', () => {

  it(`should render the button and it's children`, () => {
    const button = shallow(<Button>Save</Button>);
    expect(button.length).to.equal(1);
    expect(button.contains(TouchableOpacity)).to.equal(true);
    expect(button.contains(Text)).to.equal(true);
    expect(button.contains('Save')).to.equal(true);
  });

  it(`should fire onPress when the button is clicked`, () => {
    const onPress = sinon.spy();
    const button = shallow(<Button onPress={ onPress }>Save</Button>);
    button.simulate('press');
    expect(onPress.called).to.equal(true);
  });

  describe('styles', () => {

    it('should have base styles', () => {
      const button = shallow(<Button type="warning">Save</Button>);
      const tchOpStyles = button.find(TouchableOpacity).props().style;
      const textStyles = button.find(Text).props().style;
      expect(tchOpStyles[0]).to.deep.equal({
        padding: 10,
        marginTop: 8,
        marginBottom: 16,
        backgroundColor: 'lightblue',
        borderRadius: 3,
      });
      expect(textStyles[0]).to.deep.equal({
        color: 'black',
        textAlign: 'center',
      });
    });

    it('should have the type specific styles', () => {
      const button = shallow(<Button type="warning">Save</Button>);
      const tchOpStyles = button.find(TouchableOpacity).props().style;
      const textStyles = button.find(Text).props().style;
      expect(tchOpStyles[1]).to.deep.equal({
        backgroundColor: defaultStyles.red,
      });
      expect(textStyles[1]).to.deep.equal({
        color: defaultStyles.white,
      });
    });

    it('should have custom styles', () => {
      const style = {
        color: 'red',
        backgroundColor: 'white',
      };
      const button = shallow(
        <Button type="warning" style={style}>Save</Button>
      );
      const tchOpStyles = button.find(TouchableOpacity).props().style;
      expect(tchOpStyles[2]).to.deep.equal(style);
    });

  });

});
