import React from 'react';
import Typography from 'antd/lib/typography';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
// import { Helmet } from 'react-helmet';
import Heading from '../Components/Heading';
import Footing from '../Components/Footing';

const { Title, Paragraph } = Typography;

const JoinUs: React.FC = () => {
    return (
        <div className="page-body">
            <Heading />
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
                <div style={{ paddingTop: 64, paddingBottom: 64, textAlign: 'center' }}>
                    <Title level={1}>Join Our Team</Title>
                    <Title level={4} type="secondary" style={{ marginBottom: 32 }}>
                        Help us shape the future of AI technology
                    </Title>
                    <div style={{ margin: '32px 0' }}>
                        <Paragraph>
                            We're looking for passionate individuals who want to make a difference in the world of AI.
                            Our team is committed to developing cutting-edge solutions that transform how people interact with technology.
                        </Paragraph>
                    </div>
                    <Row gutter={[24, 24]} style={{ marginTop: 32, marginBottom: 32 }}>
                        <Col xs={24} md={8}>
                            <Card style={{ height: '100%' }} hoverable>
                                <Title level={5}>Engineering</Title>
                                <Paragraph>
                                    Build the core technologies that power our AI solutions.
                                </Paragraph>
                                <Button type="primary" ghost>
                                    View Positions
                                </Button>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card style={{ height: '100%' }} hoverable>
                                <Title level={5}>Research</Title>
                                <Paragraph>
                                    Push the boundaries of what's possible in AI and machine learning.
                                </Paragraph>
                                <Button type="primary" ghost>
                                    View Positions
                                </Button>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card style={{ height: '100%' }} hoverable>
                                <Title level={5}>Operations</Title>
                                <Paragraph>
                                    Help us scale and deliver our solutions to customers worldwide.
                                </Paragraph>
                                <Button type="primary" ghost>
                                    View Positions
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                    <div style={{ margin: '48px 0' }}>
                        <Title level={3}>Our Values</Title>
                        <Row gutter={[16, 16]} justify="center">
                            <Col xs={24} sm={8}>
                                <div>
                                    <Title level={5}>Innovation</Title>
                                    <Paragraph>We push boundaries and challenge the status quo.</Paragraph>
                                </div>
                            </Col>
                            <Col xs={24} sm={8}>
                                <div>
                                    <Title level={5}>Integrity</Title>
                                    <Paragraph>We build AI with strong ethical principles.</Paragraph>
                                </div>
                            </Col>
                            <Col xs={24} sm={8}>
                                <div>
                                    <Title level={5}>Impact</Title>
                                    <Paragraph>We create technology that makes a positive difference.</Paragraph>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div style={{ marginTop: 48 }}>
                        <Title level={4}>
                            No open positions that match your skills?
                        </Title>
                        <Button type="primary" size="large" style={{ marginTop: 16 }}>
                            Send us your resume
                        </Button>
                    </div>
                </div>
            </div>
            <Footing />
        </div>
    );
};

export default JoinUs;
