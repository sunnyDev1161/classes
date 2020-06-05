import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { THEMES } from 'src/constants';
export default class CustomPagination extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ],
      currentPage: 1,
      todosPerPage: 3,
      upperPageBound: 3,
      lowerPageBound: 0,
      isPrevBtnActive: 'disabled',
      isNextBtnActive: '',
      pageBound: 3
    };
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
  }
  componentDidUpdate() {
    // $('ul li.active').removeClass('active');
    // $('ul li#' + this.state.currentPage).addClass('active');
  }
  handleClick(event) {
    let listid = Number(event.target.id);
    console.log('number is clied ====== ');
    this.setState({
      currentPage: listid
    });
    // $('ul li.active').removeClass('active');
    // $('ul li#' + listid).addClass('active');
    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(
      this.state.todos.length / this.state.todosPerPage
    );
    this.setState({ isNextBtnActive: 'disabled' });
    this.setState({ isPrevBtnActive: 'disabled' });
    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: '' });
    } else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: '' });
    } else if (totalPage > 1) {
      this.setState({ isNextBtnActive: '' });
      this.setState({ isPrevBtnActive: '' });
    }
  }
  btnIncrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound
    });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnDecrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
      });
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnNextClick() {
    if (this.state.currentPage + 1 > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
      });
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  render() {
    const {
      todos,
      currentPage,
      todosPerPage,
      upperPageBound,
      lowerPageBound,
      isPrevBtnActive,
      isNextBtnActive
    } = this.state;

    // const classes = this.useStyles();
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = (
      <div className="flex">
        {pageNumbers.map(number => {
          if (number === 1 && currentPage === 1) {
            return (
              <button
                key={number}
                className="active paginationBtns"
                id={number}
                onClick={this.handleClick}
              >
                {number < 10 ? '0'+number : number}
              </button>
            );
          } else if (number < upperPageBound + 1 && number > lowerPageBound) {
            return (
              <button
                key={number}
                className="active paginationBtns"
                id={number}
                onClick={this.handleClick}
              >
                {number < 10 ? '0' + number : number}
              </button>
            );
          }
        })}
      </div>
    );
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = (
        <li className="">
          <a href="#" onClick={this.btnIncrementClick}>
            {' '}
            &hellip;{' '}
          </a>
        </li>
      );
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = (
        <li className="">
          <a href="#" onClick={this.btnDecrementClick}>
            {' '}
            &hellip;{' '}
          </a>
        </li>
      );
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === 'disabled') {
      renderPrevBtn = (
        <div className={isPrevBtnActive + ' ' + 'flex'}>
          <i className={`fas fa-angle-double-left yellowColor`} />
          <span className="paginationText">Previous</span>
        </div>
      );
    } else {
      renderPrevBtn = (
        <div
          className={isPrevBtnActive + ' ' + 'flex'}
          id="btnPrev"
          onClick={this.btnPrevClick}
        >
          <i className={`fas fa-angle-double-left yellowColor `} />
          <span className="paginationText">Previous</span>
        </div>
      );
    }
    let renderNextBtn = null;
    if (isNextBtnActive === 'disabled') {
      renderNextBtn = (
        <div className={isNextBtnActive + ' ' + 'flex'} id="btnNext">
          <span className="paginationText">Next</span>{' '}
          <i className={`fas fa-angle-double-right yellowColor`} />
        </div>
      );
    } else {
      renderNextBtn = (
        <div
          className={isNextBtnActive + ' ' + 'flex'}
          id="btnNext"
          onClick={this.btnNextClick}
        >
          <span className="paginationText">Next</span>{' '}
          <i className={`fas fa-angle-double-right yellowColor`} />
        </div>
      );
    }
    return (
      <div className="paginationWrapper">
        {/* <ul>{renderTodos}</ul> */}
        <div className="flex">
          {renderPrevBtn}
          {/* {pageDecrementBtn} */}
          {renderPageNumbers}
          {/* {pageIncrementBtn} */}
          {renderNextBtn}
        </div>
      </div>
    );
  }
}
