import React  from 'react';

const TodoListTemplate = ({form, children}) => {
    return (
        <main >
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
        </main>
    )
}

export default TodoListTemplate;
