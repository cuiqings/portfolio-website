import React, { useState } from 'react';
import {
  Button,
  Card,
  Modal,
  Input,
  Tag,
  Loading,
  Image,
} from '../components/UI';

const ComponentTestPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
          UI Components Test Page
        </h1>

        {/* Button Component */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Button Component
          </h2>
          <Card>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">
                  Primary Small
                </Button>
                <Button variant="primary" size="md">
                  Primary Medium
                </Button>
                <Button variant="primary" size="lg">
                  Primary Large
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button disabled>Disabled</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  }
                >
                  With Icon
                </Button>
                <Button loading>Loading</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Card Component */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Card Component
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <h3 className="text-lg font-semibold mb-2">Regular Card</h3>
              <p className="text-gray-600 dark:text-gray-400">
                This is a regular card without hover effects.
              </p>
            </Card>
            <Card hoverable onClick={() => alert('Card clicked!')}>
              <h3 className="text-lg font-semibold mb-2">Hoverable Card</h3>
              <p className="text-gray-600 dark:text-gray-400">
                This card has hover effects. Try hovering over it!
              </p>
            </Card>
          </div>
        </section>

        {/* Modal Component */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Modal Component
          </h2>
          <Card>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Example Modal"
              size="md"
            >
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This is a modal dialog. You can close it by clicking the X
                button, clicking outside, or pressing the Escape key.
              </p>
              <div className="flex justify-end gap-2">
                <Button
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
              </div>
            </Modal>
          </Card>
        </section>

        {/* Input Component */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Input Component
          </h2>
          <Card>
            <div className="space-y-4">
              <Input
                label="Name"
                placeholder="Enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                error="Password must be at least 8 characters"
              />
            </div>
          </Card>
        </section>

        {/* Tag Component */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Tag Component
          </h2>
          <Card>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Tag>Default Tag</Tag>
                <Tag variant="primary">Primary Tag</Tag>
                <Tag variant="success">Success Tag</Tag>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind', 'Vite'].map((tech) => (
                  <Tag
                    key={tech}
                    variant="primary"
                    onClick={() => setSelectedTag(tech)}
                    active={selectedTag === tech}
                  >
                    {tech}
                  </Tag>
                ))}
              </div>
              {selectedTag && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Selected: {selectedTag}
                </p>
              )}
            </div>
          </Card>
        </section>

        {/* Loading Component */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Loading Component
          </h2>
          <Card>
            <div className="flex flex-wrap gap-8 items-center">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Small
                </p>
                <Loading size="sm" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Medium
                </p>
                <Loading size="md" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Large
                </p>
                <Loading size="lg" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  With Text
                </p>
                <Loading size="md" text="Loading..." />
              </div>
            </div>
          </Card>
        </section>

        {/* Image Component */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Image Component
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <h3 className="text-lg font-semibold mb-2">Lazy Loading Image</h3>
              <Image
                src="https://via.placeholder.com/400x300"
                alt="Placeholder image"
                className="w-full h-48 object-cover rounded"
                lazy={true}
              />
            </Card>
            <Card>
              <h3 className="text-lg font-semibold mb-2">Error Handling</h3>
              <Image
                src="https://invalid-url.example.com/image.jpg"
                alt="This image will fail to load"
                className="w-full h-48 object-cover rounded"
              />
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentTestPage;
