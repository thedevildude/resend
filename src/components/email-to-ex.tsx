import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Heart, Send, Clock } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function EmailToEx() {
  const [formData, setFormData] = useState({
    senderEmail: "",
    exEmail: "",
    subject: "",
    message: "",
    duration: "365",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email (in reality, this would be handled by a backend service)
    toast.success(
      "Your message is set to be delivered in 365 days! Time heals... or not! 😉",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mb-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">
          Email Your Ex... in a Year! 💌
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="senderEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <Input
              type="email"
              id="senderEmail"
              name="senderEmail"
              value={formData.senderEmail}
              onChange={handleChange}
              required
              className="mt-1"
              placeholder="youremail@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="exEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Your Ex's Email
            </label>
            <Input
              type="email"
              id="exEmail"
              name="exEmail"
              value={formData.exEmail}
              onChange={handleChange}
              required
              className="mt-1"
              placeholder="exemail@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <Input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="mt-1"
              placeholder="Remember me?"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1"
              placeholder="Pour your heart out...!
              Only 0.0001% chance they'll see it"
              rows={4}
            />
          </div>
          <div>
            <label
              htmlFor="Duration"
              className="block text-sm font-medium text-gray-700"
            >
              When to send the message
            </label>
            <Tabs
              defaultValue="365"
              className="w-full"
              onValueChange={(value) =>
                setFormData((prevState) => ({
                  ...prevState,
                  duration: value,
                }))
              }
            >
              <TabsList>
                <TabsTrigger value="ONE">1 month</TabsTrigger>
                <TabsTrigger value="THREE">3 months</TabsTrigger>
                <TabsTrigger value="SIX">6 months</TabsTrigger>
                <TabsTrigger value="TWELVE">1 year</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            <Send className="mr-2 h-4 w-4" /> Send to the Future!
          </Button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500">
          <Clock className="inline-block mr-1 h-4 w-4" />
          Your message will be delivered in 365 days
        </div>
        <div className="mt-4 text-center">
          <Heart className="inline-block text-red-500 h-6 w-6 animate-pulse" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
