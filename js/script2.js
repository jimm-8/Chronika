function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const arrMonth = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31 };

const arrDays = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"];


class LeftBlock extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",


    () => {
      this.handleToUpdate(!this.state.toggle);
      this.setState(prevState => ({
        toggle: !prevState.toggle }));

    });_defineProperty(this, "handleSubmit",
    () => {
      this.handleToUpdateSubmit(this.state.time, this.state.event);
      event.preventDefault();

    });_defineProperty(this, "handleTimeChange",
    event => {
      this.setState({ time: event.target.value });
    });_defineProperty(this, "handleEventChange",
    event => {
      this.setState({ event: event.target.value });

    });this.state = { toggle: true, time: "", event: "" };}
  render() {
    this.handleToUpdate = this.props.handleToUpdate;
    this.handleToUpdateSubmit = this.props.handleToUpdateSubmit;
    let h =
    (this.props.date.getHours() < 10 ? "0" : "") + this.props.date.getHours();
    let m =
    (this.props.date.getMinutes() < 10 ? "0" : "") +
    this.props.date.getMinutes();
    return /*#__PURE__*/(
      React.createElement("div", { className: "flip-container-left" }, /*#__PURE__*/
      React.createElement("div", { className: `flipper ${this.state.toggle ? "" : "toggle"}` }, /*#__PURE__*/
      React.createElement("div", { className: "front front-left" }, /*#__PURE__*/
      React.createElement("h2", null, "Today"), /*#__PURE__*/
      React.createElement("h1", null, this.props.date.getDate()), /*#__PURE__*/
      React.createElement("h2", null, arrDays[this.props.date.getDay()]), /*#__PURE__*/
      React.createElement("button", { className: "btn btn-flip", onClick: this.handleClick }, "+")), /*#__PURE__*/



      React.createElement("div", { className: "back back-left" }, /*#__PURE__*/
      React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("div", { className: "container-event" }, /*#__PURE__*/
      React.createElement("input", {
        type: "text",
        className: "input-time",
        maxlength: "5",
        placeholder: "12:00",
        onChange: this.handleTimeChange }), /*#__PURE__*/

      React.createElement("button", { className: "btn btn-submit" }, "\u2192")), /*#__PURE__*/

      React.createElement("input", {
        type: "text",
        className: "input-event",
        placeholder: "Event",
        onChange: this.handleEventChange })), /*#__PURE__*/


      React.createElement("button", { className: "btn btn-flip", onClick: this.handleClick }, "-")))));






  }}


class RightBlock extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "updateMonth",












    event => {
      let newMonth = Object.keys(arrMonth).indexOf(event.target.value);
      this.handleToUpdateDate(this.state.selectedDay + "/" + newMonth + "/" + this.state.selectedYear);
      this.setState({
        selectedMonth: newMonth,
        firstDay: new Date(
        this.state.selectedYear + "-" + (newMonth + 1) + "-01").
        getDay() });

    });_defineProperty(this, "prevMonth",
    () => {
      if (this.state.selectedMonth - 1 < 0) {
        this.handleToUpdateDate(this.state.selectedDay + "/" + 11 + "/" + this.state.selectedYear - 1);
        this.setState(prevState => ({
          selectedMonth: 11,
          selectedYear: prevState.selectedYear - 1,
          firstDay: new Date(prevState.selectedYear - 1 + "-" + "12-01").getDay() }));

      } else {
        this.handleToUpdateDate(this.state.selectedDay + "/" + this.state.selectedMonth - 1 + "/" + this.state.selectedYear);
        this.setState(prevState => ({
          selectedMonth: prevState.selectedMonth - 1,
          firstDay: new Date(
          this.state.selectedYear + "-" + prevState.selectedMonth + "-01").
          getDay() }));

      }
    });_defineProperty(this, "nextMonth",
    () => {
      if (this.state.selectedMonth + 1 > 11) {
        this.handleToUpdateDate(this.state.selectedDay + "/" + 0 + "/" + this.state.selectedYear + 1);
        this.setState(prevState => ({
          selectedMonth: 0,
          selectedYear: prevState.selectedYear + 1,
          firstDay: new Date(prevState.selectedYear + 1 + "-" + "01-01").getDay() }));

      } else {
        this.handleToUpdateDate(this.state.selectedDay + "/" + this.state.selectedMonth + 1 + "/" + this.state.selectedYear);
        this.setState(prevState => ({
          selectedMonth: prevState.selectedMonth + 1,
          firstDay: new Date(
          this.state.selectedYear + "-" + (prevState.selectedMonth + 2) + "-01").
          getDay() }));

      }
    });_defineProperty(this, "updateYear",
    event => {
      if (event.target.value.length == 4) {
        this.handleToUpdateDate(this.state.selectedDay + "/" + this.state.selectedMonth + "/" + event.target.value);
        this.setState({
          selectedYear: parseInt(event.target.value),
          firstDay: new Date(
          parseInt(event.target.value) + "-" + (this.state.selectedMonth + 1) + "-01").
          getDay() });

      } else if (event.target.value.length > 0) {
        this.setState({
          selectedYear: parseInt(event.target.value) });

      }
    });_defineProperty(this, "handleClick",
    event => {
      this.handleToUpdateDate(event.currentTarget.dataset.id + "/" + this.state.selectedMonth + "/" + this.state.selectedYear);
      this.setState({
        selectedDay: parseInt(event.currentTarget.dataset.id) });

    });this.state = { firstDay: new Date(this.props.date.getFullYear() + "-" + (this.props.date.getMonth() + 1) + "-01").getDay(), selectedYear: this.props.date.getFullYear(), selectedMonth: this.props.date.getMonth(), selectedDay: this.props.date.getDate() };}

  getDayBlocks() {
    let arrNo = [];
    for (let n = 0; n < this.state.firstDay; n++) {
      arrNo.push( /*#__PURE__*/React.createElement("div", { className: "day-block" }));
    }
    for (
    let i = 1;
    i < Object.values(arrMonth)[this.state.selectedMonth] + 1;
    i++)
    {
      arrNo.push( /*#__PURE__*/
      React.createElement("div", {
        "data-id": i,
        onClick: this.handleClick,
        className: `day-block ${i == this.state.selectedDay ? "active" : ""}` }, /*#__PURE__*/

      React.createElement("div", { className: "inner" }, i)));


    }
    return arrNo;
  }
  getEvents() {
    let events = [];
    let eventsToday = this.props.eventList.filter(event => {
      let dateArr = event[0].split('/');
      if (dateArr[0] == this.state.selectedDay && dateArr[1] == this.state.selectedMonth && dateArr[2] == this.state.selectedYear) {
        events.push( /*#__PURE__*/React.createElement("div", { className: "event" }, /*#__PURE__*/React.createElement("p", { className: "event-time" }, event[1]), /*#__PURE__*/React.createElement("p", { className: "event-name" }, event[2])));
      }
    });
    return events;
  }
  render() {
    this.handleToUpdateDate = this.props.handleToUpdateDate;

    const monthOptions = Object.keys(arrMonth).map((month) => /*#__PURE__*/
    React.createElement("option", {
      className: "option-month",
      selected:
      month == Object.keys(arrMonth)[this.state.selectedMonth] ? "selected" : "" },


    month));



    return /*#__PURE__*/(
      React.createElement("div", { className: "flip-container-right" }, /*#__PURE__*/
      React.createElement("div", { className: `flipper ${this.props.toggle ? "" : "toggle"}` }, /*#__PURE__*/
      React.createElement("div", { className: "front front-right" }, /*#__PURE__*/
      React.createElement("div", { className: "container-date-picker" }, /*#__PURE__*/
      React.createElement("button", { className: "btn btn-prev", onClick: this.prevMonth }, "<"), /*#__PURE__*/


      React.createElement("select", { className: "select-month", onChange: this.updateMonth },
      monthOptions), /*#__PURE__*/

      React.createElement("input", {
        type: "text",
        className: "input-year",
        onChange: this.updateYear,
        value: this.state.selectedYear,
        maxlength: "4" }), /*#__PURE__*/

      React.createElement("button", { className: "btn btn-next", onClick: this.nextMonth }, ">")), /*#__PURE__*/



      React.createElement("div", { className: "container-day" },
      arrDays.map((day) => /*#__PURE__*/
      React.createElement("div", { className: "weekday" }, day.substring(0, 3))),

      this.getDayBlocks())), /*#__PURE__*/


      React.createElement("div", { className: "back back-right" }, /*#__PURE__*/
      React.createElement("div", { className: "container-events" }, this.getEvents(), " ")))));




  }}


class Calendar extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleToUpdate",









    isToggle => {
      this.setState({ toggle: isToggle });
    });_defineProperty(this, "handleToUpdateSubmit",
    (time, event) => {
      this.setState(prevState => {
        const list = [...prevState.eventList, [this.state.selectedDate, time, event]];
        return {
          eventList: list };

      });
    });_defineProperty(this, "handleToUpdateDate",
    date => {
      this.setState({
        selectedDate: date });

    });_defineProperty(this, "tick",








    () => {
      this.setState({
        date: new Date() });

    });let _date = new Date();this.state = { date: _date, toggle: true, eventList: [], selectedDate: _date.getDate() + "/" + _date.getMonth() + "/" + _date.getFullYear() };}componentDidMount() {this.timerID = setInterval(this.tick, 1000); //refresh each second
  }componentWillUnmount() {clearInterval(this.timerID);}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
      React.createElement(LeftBlock, { date: this.state.date, handleToUpdate: this.handleToUpdate, handleToUpdateSubmit: this.handleToUpdateSubmit }), /*#__PURE__*/
      React.createElement(RightBlock, { date: this.state.date, toggle: this.state.toggle, handleToUpdateDate: this.handleToUpdateDate, eventList: this.state.eventList })));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(Calendar, null), document.getElementById("root"));