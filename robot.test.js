const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  let robot = newRobot(true, true, false);  

  // act
  let result = station(robot);

  // assert
  expect(result).toBe(1);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  let robot = newRobot(true, false, true);  

  // act
  let result = station(robot);

  // assert
  expect(result).toBe(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  let robot = newRobot(true, false, false);  

  // act
  let result = station(robot);

  // assert
  expect(result).toBe(3);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  let robot = newRobot(false, false, false);  

  // act
  let result = station(robot);

  // assert
  expect(result).toBe(4);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  let robot = newRobot(true, false, true, []);  

  // act
  let result = prioritizeTasks(robot);

  // assert
  expect(result).toBe(-1);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
 
  // because there is no argument for the list, need to append the list to the robot object
  let robot = newRobot(true, false, true);  
  robot.todos.push(10, 7, 8, 3, 4)

  // act
  let result = prioritizeTasks(robot);

  // assert
  expect(result).toBe(10);
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  let robot = newRobot(true, false, true, []);
  let today = "Tuesday"
    

  // act
  let result = isWorkday(robot, today)
  robot.dayOff = "Tuesday"

  // assert
  expect(result).toBe(true); 
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  let robot = newRobot(true, false, true, []);
  let today = "Monday"
    

  // act
  let result = isWorkday(robot, today)

  // assert
  expect(result).toBe(true); 
});
