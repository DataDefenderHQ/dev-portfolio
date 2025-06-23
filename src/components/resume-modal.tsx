import { useState } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const resumeAccessSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  purpose: z.string().optional(),
});

type ResumeAccessData = z.infer<typeof resumeAccessSchema>;

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'view' | 'download';
}

export default function ResumeModal({ isOpen, onClose, type }: ResumeModalProps) {
  const { toast } = useToast();

  const form = useForm<ResumeAccessData>({
    resolver: zodResolver(resumeAccessSchema),
    defaultValues: {
      email: "",
      purpose: "",
    },
  });

  const resumeAccessMutation = useMutation({
    mutationFn: (data: ResumeAccessData) => apiRequest("POST", "/api/resume-access", data),
    onSuccess: (response) => {
      toast({
        title: "Access granted!",
        description: type === 'download' 
          ? "Your resume download will start shortly." 
          : "Opening resume viewer...",
      });
      
      if (type === 'download') {
        // Simulate download
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = response.data?.downloadUrl || '#';
          link.download = 'Margaret_Wangui_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 1000);
      } else {
        // Open resume viewer (in production, this would open a PDF viewer)
        toast({
          title: "Resume Viewer",
          description: "In production, this would open a PDF viewer or redirect to resume URL.",
        });
      }
      
      form.reset();
      onClose();
    },
    onError: (error: any) => {
      toast({
        title: "Error accessing resume",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ResumeAccessData) => {
    resumeAccessMutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Access Resume</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            Please provide your email to access my resume. 
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="job-opportunity">Job Opportunity</SelectItem>
                        <SelectItem value="freelance-project">Freelance Project</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="general-interest">General Interest</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex gap-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1"
                  disabled={resumeAccessMutation.isPending}
                >
                  {resumeAccessMutation.isPending ? "Processing..." : "Access Resume"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
