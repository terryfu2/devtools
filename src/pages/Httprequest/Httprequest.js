import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { Tab, Tabs } from "react-bootstrap";
import prettyBytes from "pretty-bytes";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";


import {ThemeContext } from "../../contexts/ThemeContext"; 

function Httprequest() {
    const [status, setStatus] = useState(0);
    const [time, setTime] = useState(0);
    const [size, setSize] = useState(0);
    const [response, setResponse] = useState({}); 
    const [responseHeaders, setResponseHeaders] = useState({});
    const [json, setJSON] = useState({});

    axios.interceptors.request.use((request) => {
        request.customData = request.customData || {};
        request.customData.startTime = new Date().getTime();
        return request;
    });
    
    function updateEndTime(response) {

        if (response !== undefined) {
        response.customData = response.customData || {};
        response.customData.time =
            new Date().getTime() - response.config.customData.startTime;
        return response;
        }
    }

    axios.interceptors.response.use(updateEndTime, (e) => {
        return Promise.reject(updateEndTime(e.response));
    });

    function keyValuePairsToObjects(container) {
        var params = {};
        container.forEach((data) => {
        params[data["key"]] = data["value"];
        });

        return params;
    }

    function sendRequest(data) {
        let dataJson;
        try {
        dataJson = json;
        } catch (e) {
        alert("JSON data is malformed");
        return;
        }
        axios({
        url: data.url,
        method: data.method,
        params: keyValuePairsToObjects(data.query_data),
        headers: keyValuePairsToObjects(data.header_data),
        dataJson,
        validateStatus: () => true,
        })
        .catch((e) =>
            console.log(e)
        )
        .then((response) => {
            if (response !== undefined) {
            setStatus(response.status);
            setResponse(response.data);
            setResponseHeaders(response.headers);
            setTime(response.customData.time);
            setSize(
                prettyBytes(
                JSON.stringify(response.data).length +
                    JSON.stringify(response.headers).length
                )
            );
            }
        });
    }
    const { theme } = React.useContext(ThemeContext); 

    return (
    <>
        <div style={{fontSize: "1.5rem", color:theme.font,fontWeight:"bold"}}>HTTP Request</div>
        <div className="p-4">
        <div>
            <Formik
                initialValues={{
                url: "https://jsonplaceholder.typicode.com/todos/1",
                query_data: [{}],
                header_data: [{}],
                method: "GET",
                }}
                onSubmit={(details) => {
                sendRequest(details);
                }}
            >
                {({ values }) => (
                <Form>
                    <div className="form-group">
                        <div className="input-group mb-4">
                            
                            <Field name="method" as="select" >
                                <option value="GET"> GET </option>
                                <option value="POST"> POST </option>
                                <option value="PUT"> PUT </option>
                                <option value="PATCH"> PATCH </option>
                                <option value="DELETE"> DELETE </option>
                            </Field>
                            
                            <Field
                                required
                                type="url"
                                name="url"
                                placeholder="https://www.example.com"
                                className="form-control"
                            />
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <Tabs
                    defaultActiveKey="query-params"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    >
                    <Tab eventKey="query-params" title="Query Params">
                        <FieldArray name="query_data">
                        {(arrayHelpers) => (
                            <div>
                            <Button onClick={() => arrayHelpers.push({})}>
                                {" "}
                                Add{" "}
                            </Button>
                            {values.query_data.map((info, index) => {
                                return (
                                <div key={index}>
                                    <Field
                                    placeholder="Key"
                                    name={`query_data.${index}.key`}
                                    type="input"
                                    />
                                    <Field
                                    placeholder="Value"
                                    name={`query_data.${index}.value`}
                                    type="input"
                                    />
                                    <Button
                                    onClick={() => arrayHelpers.remove(index)}
                                    >
                                    x
                                    </Button>
                                </div>
                                );
                            })}
                            </div>
                        )}
                        </FieldArray>
                    </Tab>
                    <Tab eventKey="headers" title="Headers">
                        <FieldArray name="header_data">
                        {(arrayHelpers) => (
                            <div>
                            <Button onClick={() => arrayHelpers.push({})}>
                                {" "}
                                Add{" "}
                            </Button>
                            {values.header_data.map((info, index) => {
                                return (
                                <div key={index}>
                                    <Field
                                    placeholder="Key"
                                    name={`header_data.${index}.key`}
                                    type="input"
                                    />
                                    <Field
                                    placeholder="Value"
                                    name={`header_data.${index}.value`}
                                    type="input"
                                    />
                                    <Button
                                    onClick={() => arrayHelpers.remove(index)}
                                    >
                                    x
                                    </Button>
                                </div>
                                );
                            })}
                            </div>
                        )}
                        </FieldArray>
                    </Tab>
                    <Tab eventKey="json" title="JSON">
                        <JSONInput
                        id="a_unique_id"
                        //
                        theme="dark_vscode_tribute"
                        colors={{
                            string: "#59A5D8", 
                            backgroud: "#FFFFFF",
                        }}
                        locale={locale}
                        onChange={(data) => setJSON(data.jsObject)}
                        height="300px"
                        />
                    </Tab>
                    </Tabs>
                </Form>
                )}
            </Formik>
        </div>
        <div>
            <h3 style = {{color:theme.font,fontSize:"1.5rem",fontWeight:"bold"}}>Response</h3>
            <div className="d-flex my-2">
                <div style = {{color:theme.font}} className="me-3 ">Status: {status}</div>
                <div style = {{color:theme.font}} className="me-3">Time: {time} ms</div>
                <div style = {{color:theme.font}} className="me-3">Size: {size}</div>
            </div>
            <div>
                <Tabs
                defaultActiveKey="body"
                id="uncontrolled-tab-example"
                className="nav nav-tabs"
                >
                <Tab eventKey="body" title="Body">
                    <pre style = {{color:theme.font,overflowY: "scroll",maxHeight: '300px'}}>
                    {JSON.stringify(response, null, 2)}
                    </pre>
                </Tab>
                <Tab eventKey="response" title="Response">
                    <pre style = {{color:theme.font, overflowY: "scroll"}}>{JSON.stringify(responseHeaders, null, 2)}</pre>
                </Tab>
                </Tabs>
            </div>
            </div>
        </div>
        </>
    );
}

export default Httprequest;