import React from 'react';
import {connect} from 'react-redux';
import contactAction from '../../redux/contactAction';

const Filter = ({value, onChangeFilter}) => (
        <div>
            <input 
                type="text" 
                className="TaskEditor-input" 
                value={value} 
                onChange={e => onChangeFilter(e.target.value)}
            />
        </div>
);

const mapStateToProps = state => ({
    value: state.contacts.filter,
  });

const mapDispatchToProps = {
    onChangeFilter: contactAction.filterContact,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);