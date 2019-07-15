import React from 'react';
import styled from 'styled-components';
import AniIcon from '../components/Icons';
import TodoList from '../components/TodoList';
import TodoItems from '../components/TodoList/TodoItems';
import AddNewTask from '../components/TodoList/AddNewTask';
import { breakpoint } from '../themes/mixins';
import { FabButton } from '../components/Buttons';

const FabButtonTodo = styled(FabButton)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 20;
`;

const Todo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
<<<<<<< HEAD
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 10;
=======
  width: 30%;
  min-width: 300px;
  height: 100%;
  background-color: rgba(255,255,255,0.3);
  z-index: 10;
  ${breakpoint.down('m')`
    width: 100%;
  `}
>>>>>>> 9ae4d4b2be6d72e976ee51e82d771d2755730b22
`;

class TodoListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {};
=======
    this.state = {
      open: false,
      type: 'add',
      data: []
    };
>>>>>>> 9ae4d4b2be6d72e976ee51e82d771d2755730b22
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  onOpanClick = () => {
    this.setState({ open: !this.state.open, type: this.state.open ? 'add' : 'delete' });
  }
  render() {
<<<<<<< HEAD
    const { ...props } = this.props;
    return <Todo {...props}>TodoListContainer</Todo>;
=======
    return (
      <React.Fragment>
        <FabButtonTodo outLine onClick={this.onOpanClick}>
          <AniIcon type={this.state.type}></AniIcon>
        </FabButtonTodo>
        <Todo hidden={!this.state.open}>
          <TodoList title={'TodoList'}>
            {(this.state.data).map((item, index) => {
              return <TodoItems title={item.title} tomatos={item.usedTomato} key={item.id}></TodoItems>
            })}
            <AddNewTask></AddNewTask>
          </TodoList>
        </Todo>
      </React.Fragment>
    );
>>>>>>> 9ae4d4b2be6d72e976ee51e82d771d2755730b22
  }
}

export default TodoListContainer;