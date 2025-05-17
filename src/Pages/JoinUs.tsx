import React from 'react';
import Typography from 'antd/lib/typography';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
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
                        (We are tentatively hiring)
                    </Title>
                    <div style={{ margin: '32px 0' }}>
                        <Paragraph>
                            At AuraAI, our mission is to develop AI that bridges the gap between humanity and the natural world. 
                            <br />
                            We translate animal behavior into clear, human-readable insights, equipping pet lovers, researchers, and veterinarians with the knowledge they need to act quickly and wisely. 
                        </Paragraph>
                    </div>
                    <Row gutter={[24, 24]} style={{ marginTop: 32, marginBottom: 32 }}>
                        <Col xs={24} md={8}>
                            <Card style={{ height: '100%' }} hoverable>
                                <Title level={5}>Marketing Specialist</Title>
                                <Paragraph style={{textAlign: 'left'}}>
                                    Drive brand awareness, craft compelling narratives, and connect our mission to a global audience. Ideal candidates are creative, data-driven, and passionate about communicating the value of Aura AI.
                                </Paragraph>
                                <Button type="primary" ghost>
                                    Apply
                                </Button>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card style={{ height: '100%' }} hoverable>
                                <Title level={5}>Machine Learning Engineer</Title>
                                <Paragraph style={{textAlign: 'left'}}>
                                Join us to build computer-vision models that read animal behavior and language models that translate those insights for people. We’re looking for deep-learning talent in image/video analysis—passionate about AI that connects species and ecosystems.                                </Paragraph>
                                <Button type="primary" ghost>
                                    Apply
                                </Button>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card style={{ height: '100%' }} hoverable>
                                <Title level={5}>UI/UX Designer</Title>
                                <Paragraph style={{textAlign: 'left'}}>
                                Design intuitive, beautiful interfaces that make advanced AI accessible and meaningful. Ideal candidates are empathetic, detail-oriented, and skilled in turning complex ideas into seamless user experiences.
                                </Paragraph>
                                <Button type="primary" ghost>
                                    Apply
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
                                    <Paragraph>Relentlessly redefining what's possible.</Paragraph>
                                </div>
                            </Col>
                            <Col xs={24} sm={8}>
                                <div>
                                    <Title level={5}>Passionate</Title>
                                    <Paragraph>Fueled by infectious enthusiasm, we pour heart into responsible AI.</Paragraph>
                                </div>
                            </Col>
                            <Col xs={24} sm={8}>
                                <div>
                                    <Title level={5}>Impact</Title>
                                    <Paragraph>Engineering technology that elevates lives.</Paragraph>
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
            <Footing style='light'/>
        </div>
    );
};

export default JoinUs;
