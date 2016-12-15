var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });
  
  describe('handleStatusChange', () => {
    it('should start Timer on started status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange('started');
      expect(timer.state.status).toBe('started');
      expect(timer.state.count).toBe(0);
      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done()
      }, 1001)
    });
    
    it('should pause Timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');
      
      setTimeout(() => {
        expect(timer.state.count).toBe(10);
        expect(timer.state.status).toBe('paused');
        done()
      }, 1001)
    });
  
    it('should clear Timer on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');
    
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.status).toBe('stopped');
        done()
      }, 1001)
    });
    
  })
  
  
});