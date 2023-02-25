import "./Form.css";
import React, { Component } from "react";
import { FiSend } from "react-icons/fi";
import { levels, learningTypes, frameworks } from "../util/data";

export class Form extends Component {
    constructor() {
        super();

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            framework: "",
            level: "",
            learningType: [],
            reason: "",
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleCheckbox = (event) => {
        const { value, checked } = event.target;
        const { learningType } = this.state;

        if (checked) {
            this.setState({
                learningType: [...learningType, value],
            });
        } else {
            if (!checked) {
                this.setState({
                    learningType: learningType.filter((e) =>
                        e !== value
                    ),
                });
            }
        }
    };

    submit = (event) => {
        event.preventDefault();
        alert('event submit');
    }

    render() {
        let {
            firstname,
            lastname,
            email,
            phone,
            framework,
            level,
            learningType,
            reason,
        } = this.state;

        return (
            <div className="bgStyle">
                <form onSubmit={this.submit} className="formStyle">
                    <div className="sendCircle">
                        <FiSend className="send_icon" />
                    </div>
                    <div>
                        <p className="head">Assignment 1</p>
                    </div>
                    <div className="fullName">
                        <div>
                            <label htmlFor="firstname" className='label'>
                                First Name
                            </label>
                            <br />
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                value={firstname}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastname" className='label'>
                                Last Name
                            </label>{" "}
                            <br />
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                value={lastname}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className='label'>
                            Email
                        </label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className='label'>
                            Phone No.
                        </label>
                        <br />
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label className='label'>
                            Which framework are you learning?
                        </label>
                        <select
                            name='framework'
                            value={framework}
                            defaultValue=''
                            onChange={this.handleChange}
                            required
                        >
                            <option disabled value=''> -- select a framework -- </option>
                            {frameworks.map((e) => {
                                return <option value={e.value}>{e.value}</option>;
                            })}
                        </select>
                    </div>
                    <div className='label'>
                        <label>Level</label>
                        <div className="wrapper">
                            {levels.map((e) => {
                                return (
                                    <div key={e.name} className="wrapperInner">
                                        <input
                                            type='radio'
                                            name='level'
                                            value={e.name}
                                            id={e.name}
                                            defaultChecked={level && level == e.name}
                                            onChange={this.handleChange}
                                        />
                                        <label htmlFor={e.name}>{e.name}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='label'>
                        <label>Why do you prefer this?</label>
                        <div className='wrapper'>
                            {learningTypes.map((e) => {
                                return (
                                    <div key={e.name} className='wrapperInner'>
                                        <input
                                            type='checkbox'
                                            name='learningType'
                                            value={e.name}
                                            id={e.name}
                                            defaultChecked={learningType && learningType.includes(e.name)}
                                            onChange={this.handleCheckbox}
                                        />
                                        <label htmlFor={e.name}>{e.name}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <label htmlFor='reason' className='label'>
                            Why do you prefer this?
                        </label>
                        <br />
                        <textarea
                            name='reason'
                            id='reason'
                            cols='30'
                            rows='10'
                            value={reason}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <button type='submit' className='button'>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
