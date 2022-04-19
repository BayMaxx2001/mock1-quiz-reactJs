import React, { useEffect, useRef } from 'react';
import { useQuestionContext } from '../../context/QuestionContext';
import { actionsQuestion } from '../../actions';
import { deleteQuestionById, getQuestionAdmin } from '../../apis/admin_question_apis';
import { useNavigate } from 'react-router-dom';
import { Button, Col, message, Pagination, Popconfirm, Row, Space, Spin, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import { PlusOutlined } from '@ant-design/icons';


function QuestionList(props) {
    const navigate = useNavigate()
    const [state, dispatch] = useQuestionContext()
    const { listQuestion, loading, pageIndex } = state
    const totalPages = useRef(1)

    const getListQuestionAPI = async (page) => {
        dispatch(actionsQuestion.OnLoading())
        const { success, data } = await getQuestionAdmin(page)
        if (success) {
            totalPages.current = data.totalPages;
            dispatch(actionsQuestion.SetListQuestion(data.results))
            dispatch(actionsQuestion.OffLoading())
        } else {
            alert(data)
        }
    }


    useEffect(() => {
        getListQuestionAPI(pageIndex)
    }, [pageIndex])

    const clickDelete = async (idQuestion) => {
        await deleteQuestionById(idQuestion)
        await getListQuestionAPI(pageIndex)
        message.success('Delete Successfully !');
    }

    const onChangePage = (pageNumber) => {
        // dispatch(actionsQuestion.setPageIndex(pageNumber));
    }

    const cancel = () => {
        message.success('Cancel delete question !');
    }

    const clickAddQuestion = () => {
        navigate('/admin-add-question')
    }

    const clickDetail = (idQuestion) => {
        console.log(idQuestion)
        navigate('/admin-detail-question/' + idQuestion)
    }
    return (
        <div>
            {
                listQuestion.length > 0 &&
                (
                    <Row justify="center" align='middle'>
                        <Col span={22}>
                            <Space align="center" style={{ marginBottom: 16, marginTop: 10 }}>
                                <Button type="primary" shape="round" icon={<PlusOutlined />} size='large' onClick={clickAddQuestion}>Add Question</Button>
                            </Space>
                            <Table
                                dataSource={listQuestion.map((
                                    (question, index) => (
                                        {
                                            key: question.id,
                                            index: index + 1,
                                            question: question.question
                                        }
                                    )
                                ))}
                                pagination={false}
                            >
                                <Column title="" dataIndex="index" key="index" />
                                <Column title="Question" dataIndex="question" key="question" />
                                <Column
                                    title="Action"
                                    key="action"
                                    render={(text, record) => (
                                        <Space size="middle">
                                            <a onClick={() => { clickDetail(record.key) }}>Detail</a>
                                            <Popconfirm
                                                title="Are you sure to delete this question?"
                                                onConfirm={() => { clickDelete(record.key) }}
                                                onCancel={cancel}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <a>Delete</a>
                                            </Popconfirm>
                                        </Space>
                                    )}
                                />
                            </Table>
                            <Row justify='end' style={{ marginTop: 10 }}>
                                <Pagination defaultCurrent={1} total={totalPages.current * 10} onChange={onChangePage} />
                            </Row>
                        </Col>
                    </Row>
                )
            }
            <Row justify='center'>
                {loading && (<Spin size="large" style={{ marginTop: 100 }} />)}
            </Row>
        </div>
    );
}

export default QuestionList;