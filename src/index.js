/**
 * @autor leejoonhyuk
 */

/**
 * todoData
 * @typedef {Object} todoData 
 * @property {string} todoId - 아이디(required)
 * @property {string} todoContent - 내용(required)
 * @property {boolean} todoCompleted - 완료여부(required)
 * @property {string} todoCategory - 카테고리(required)
 * @property {string[]} [todoTags] - 태그들(optional)
 */

/**
 * Todo data list
 * @typedef {Array<todoData>} todoList 
 * @property {todoData} todoData - 투두데이터(required)
 */


/**
 * 할 일을 추가 한다 
 * 내용없이 추가할 수 없다 
 * 태그는 배열로 optional이다
 * @param {string} todoContent - 내용 
 * @param {boolean} todoCompleted - 완료여부
 * @param {string} todoCategoty - 카테고리
 * @param {string[]} todoTags - 태그들
 * @return {todoList}
 */
function createTodo(todoContent, todoCompleted, todoCategory, todoTags){
}

/**
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {string} todoId 
 * @returns {todoList | todoData}
 */
function readTodo(todoId){
};

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {todoData} todoData - todo데이터
 * @returns {todoList}
 */
function updateTodo(todoData){
};

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {string} [id] - 아이디
 * @param {number} [tagIndex] - 삭제할 태그 index
 * @param {boolean} deleteAll - 전체삭제
 * @return {todoList}
 */
function deleteTodo(id, tagIndex, deleteAll){
};


deleteTodo()
updateTodo()