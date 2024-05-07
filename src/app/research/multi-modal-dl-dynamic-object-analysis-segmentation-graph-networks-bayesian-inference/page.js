"use client"
import Image from "next/image";
import teddy from "../../assets/ife.png";
import "../../styles/nav.scss"
import Link from "next/link";
import "../../globals.css"

import "../../styles/research.scss"
import teddyimg from '../../assets/oweh.jpeg'
import researchteam from '../../assets/researchteam.jpeg'
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS

import Nav from "../../components/Nav";
import { researches } from "../page-data";
import { usePathname,useRouter } from 'next/navigation';
import Footer from "../../components/Footer";
import './work.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight,darcula,atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { lstmcode, yolocode } from "./codes";

export default function About() {
    const router = useRouter();

    const code = `const hello = 'world';\nconsole.log(hello);`;

  return (
    <div className="app">
      <Nav/>
      <div className="body slide-up">
        <div className="top">
            <div className="name">
            Multi-Modal Deep Learning  Temporal Graph Networks - for Vehicle Recognition and Speed Estimation
            </div>
            <div className="bio">
            Built and developed License plate segmentation, vehicle tracking, and real-time speed estimation algorithms. Leveraging deep learning architectures such as YOLOv4, GANs, and LSTM, coupled with innovative techniques like non-maximum suppression and homographic transformations, the proposed methodologies surpass conventional methods in accuracy and efficiency. Through rigorous experimentation and analysis, this study demonstrates the superiority of the proposed approach in terms of Jaccard Index (IoU
            </div>
           
        </div>
        <div className="paper-content">

            <p>
            Addressing the pivotal needs of accurate license plate segmentation and robust vehicle tracking in applications from surveillance to traffic management, this paper introduces a novel deep learning framework to overcome the limitations of traditional methods which struggle with complex, variable environmental condition
            </p>
     
            <h1> Approach</h1>
      <h2> License Plate Segmentation</h2>
      <h3>ierarchical Convolutional Feature Extraction Pipeline</h3>
      <ul>
        <li><strong>Input Image</strong></li>
        <li><strong>Multi-scale Feature Pyramid Generation:</strong> This process leverages a deep convolutional network that applies a series of transformations to extract features at multiple scales. The mathematical formulation incorporates a convolution operation defined over a spatial domain with varying kernel sizes to capture both local and global features effectively:
          <BlockMath>{`F_l = \\text{ReLU}(\\text{BN}(\\text{Conv}(F_{l-1}))) \\quad \\text{for } l = 1, 2, ..., L`}</BlockMath>
        </li>
        <li><strong>Spatial Pyramid Pooling:</strong> This step is crucial for aggregating features at various scales and enhancing the network&#39;s robustness to object scale variations. It is mathematically formulated as a union of max-pooling operations performed over a hierarchy of grid partitions:
          <BlockMath>{`S = \\bigcup_{{k \\in \\{1,4,16,64\\}}} \\text{MaxPool}_k(F_L)`}</BlockMath>
        </li>
        <li><strong>Dynamic Anchor Assignment:</strong> A key innovation in improving bounding box predictions, this technique dynamically assigns anchors using a k-means clustering algorithm on ground truth bounding boxes to minimize IoU discrepancies, which is formulated as:
          <BlockMath>{`A_i = \\argmin_{{a \\in A}} \\left(1 - \\text{IoU}(b_i, a)\\right)`}</BlockMath>
        </li>
        <li><strong>Feature Fusion with Residual Connections:</strong> This component combines features across different pyramid levels to enhance feature robustness against object deformations and occlusions, expressed as a weighted sum of upsampled features:
          <BlockMath>{`F' = \\sum_{{l=1}}^{L} \\alpha_l \\cdot \\text{UpSample}(F_l, 2^{L-l})`}</BlockMath>
        </li>
        <li><strong>Predictive Uncertainty Estimation (Bayesian Interpretation):</strong> This advanced statistical approach models the predictive uncertainty in object localization and classification, integral for robust performance in dynamic environments:
          <BlockMath>{`p(y|x, D) = \\int p(y|x, \\theta) p(\\theta|D) d\\theta`}</BlockMath>
        </li>
        <li><strong>Output:</strong> Predicted bounding boxes and probabilistic objectness scores.</li>
      </ul>
  <div className="code-div">
  <SyntaxHighlighter language="python" style={atomDark}>
      {yolocode}
    </SyntaxHighlighter>
  </div>
      <h3>GANs Data Augmentation Pipeline</h3>
      <ul>
        <li><strong>Input Image</strong></li>
        <li><strong>Variational Autoencoder (VAE):</strong> A VAE is employed to learn a generative model of the input data distribution, which is crucial for synthesizing realistic augmentations. The encoder-decoder structure is framed by:
          <BlockMath>{`z \\sim \\mathcal{N}(\\mu, \\sigma^2 I), \\quad [\\mu, \\sigma] = \\text{Encoder}(x), \\quad x_{\\text{recon}} = \\text{Decoder}(z)`}</BlockMath>
        </li>
        <li><strong>Wasserstein GAN with Gradient Penalty:</strong> This formulation stabilizes training of the GAN by enforcing a soft version of the Lipschitz constraint on the discriminator, enhancing the quality and variability of generated samples:
          <BlockMath>{`\\min_G \\max_D V(D, G) = \\mathbb{E}_{x \\sim p_{\\text{data}}} [D(x)] - \\mathbb{E}_{z \\sim p_z} [D(G(z))] + \\lambda \\mathbb{E}_{\\hat{x} \\sim p_{\\hat{x}}} [(\\|\\nabla_{\\hat{x}} D(\\hat{x})\\|_2 - 1)^2]`}</BlockMath>
        </li>
        <li><strong>Adaptive Augmentation Policy:</strong> This policy adapts augmentation strategies based on the current training state of the model, optimizing the model&#39;s exposure to a diverse range of training examples:
          <BlockMath>{`\\Delta = \\argmin_{\\delta} \\mathbb{E}_{x, \\delta \\sim p(\\delta)} [\\log(1 - D(x+\\delta))]`}</BlockMath>
        </li>
        <li><strong>Output:</strong> Augmented image with uncertainty estimation.</li>
      </ul>
      <h3>LSTM Sequential Feature Extraction</h3>
      <p>
        This module is critical for capturing temporal dynamics and dependencies across sequences of image frames, providing a robust foundation for subsequent recognition tasks.
      </p>
      <ul>
        <li>
          <strong>Input Sequence of Feature Maps:</strong> Each frame undergoes a convolutional transformation to produce a dense representation that encapsulates essential visual cues. These are then processed through sophisticated attention mechanisms to focus processing on salient features.
        </li>
        <li>
          <strong>Temporal Convolutional Networks (TCNs):</strong> TCNs extend traditional convolutional networks to temporal sequences, leveraging dilated convolutions to expand their receptive field without loss of resolution or coverage:
          <BlockMath>
            {`F_t = \\sum_{\\tau=0}^T w_\\tau \\ast F_{t-\\tau}`}
          </BlockMath>
        </li>
        <li>
          <strong>Bi-directional LSTM with Gated Recurrent Units (GRUs):</strong> This architecture captures both forward and backward dependencies within the sequence, employing GRUs for their efficiency in modelling long-term dependencies:
          <BlockMath>
            {`h_t = \\text{BiLSTM}(h_{t-1}, x_t) + \\text{GRU}(h_{t+1}, x_t)`}
          </BlockMath>
        </li>
        <li>
          <strong>Self-Attention Mechanisms (Transformer Layers):</strong> To further refine the feature representation over time, self-attention computes a weighted sum of all features in the sequence, focusing on those most relevant to the current prediction:
          <BlockMath>
            {`H' = \\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V`}
          </BlockMath>
        </li>
        <li>
          <strong>Output:</strong> The output is a highly contextualized sequence representation that incorporates both spatial and temporal dynamics, essential for accurate prediction and segmentation tasks.
        </li>
      </ul>
             <SyntaxHighlighter language="python" style={atomDark}>
      {lstmcode}
    </SyntaxHighlighter>
      <h2>Vehicle Tracking</h2>
      <ul>
        <li>
          <strong>Input Image Sequence</strong>
        </li>
        <li>
          <strong>Backbone Network:</strong> Utilizes state-of-the-art architectures like ResNet or MobileNet, which are adept at extracting rich feature hierarchies from visual data.
        </li>
        <li>
          <strong>Object Detection Head:</strong> This component is tasked with predicting bounding boxes and objectness scores, essential for locating vehicles within the frame:
          <BlockMath>
            {`O(x) = \\sigma(W_o \\cdot x + b_o)`}
          </BlockMath>
        </li>
        <li>
          <strong>Soft Non-Maximum Suppression (Soft-NMS):</strong> Improves the precision of bounding box predictions by decaying the scores of overlapping boxes, thus reducing false positives:
          <BlockMath>
            {`\\text{Score}(b_i) \\times \\exp\\left(-\\frac{\\text{IoU}(b_i, b_{\\text{max}})^2}{\\sigma^2}\\right)`}
          </BlockMath>
        </li>
        <li>
          <strong>Data Association:</strong> Employs sophisticated algorithms like Kalman Filtering and the Hungarian Algorithm to track object identities consistently across frames.
        </li>
        <li>
          <strong>Motion Model Prediction:</strong> Utilizes a predictive model to estimate future positions based on observed velocities and accelerations:
          <BlockMath>
            {`p_{t+1} = p_t + v_t \\Delta t + \\frac{1}{2} a_t \\Delta t^2`}
          </BlockMath>
        </li>
        <li>
          <strong>Output:</strong> Tracked object trajectories with quantified uncertainty, crucial for reliable vehicle monitoring.
        </li>
      </ul>
      <h2> Real-Time Speed Estimation</h2>
      <ul>
        <li>
          <strong>Input Video Frames</strong>
        </li>
        <li>
          <strong>Object Detection Module:</strong> Employs YOLOv4 for rapid and accurate vehicle detection per frame.
        </li>
        <li>
          <strong>Homographic Transformation Layer:</strong> Transforms the detected vehicle coordinates from the image plane to the real-world plane, facilitating accurate speed measurement:
          <BlockMath>
            {`X_w = H^{-1} X_i`}
          </BlockMath>
        </li>
        <li>
          <strong>Feature Extraction Network:</strong> Advanced neural networks like VGG or ResNet are employed to extract detailed features from detected vehicles, which are critical inputs for the speed estimation model.
        </li>
        <li>
          <strong>Regression Network:</strong> A regression model computes the vehicle&#39;s speed from extracted features, integrating techniques such as dropout and batch normalization to enhance prediction stability and generalization:
          <BlockMath>
            {`\\hat{y} = W_r \\cdot x + b`}
          </BlockMath>
        </li>
        <li>
          <strong>Output:</strong> The estimated speeds of vehicles, quantified with uncertainty metrics to account for variations in detection accuracy and environmental factors.
        </li>
      </ul>
      <div className="demo">
        <h2>
            Demos - Traffic Analysis for Stephenville City & Tarleton State University Campus
        </h2>
        <video src="/v1.mp4" controls={true} />
        <video src="/v2.mp4" controls={true} />
        <video src="/v3.mp4" controls={true} />
      </div>
        </div>
     
      </div>
      <Footer/>
    </div>
  );
}
