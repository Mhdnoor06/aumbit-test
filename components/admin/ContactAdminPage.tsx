"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  Building,
  Calendar,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied" | "closed";
  createdAt: string;
  updatedAt: string;
}

interface PaginationData {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export default function ContactAdminPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    page: 1,
    limit: 10,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedSubmission, setSelectedSubmission] =
    useState<ContactSubmission | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        status: statusFilter,
        search: searchTerm,
      });

      const response = await fetch(`/api/contact?${params}`);
      const result = await response.json();

      if (result.success) {
        setSubmissions(result.data);
        setPagination(result.pagination);
      }
    } catch (error) {
      console.error("Failed to fetch submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdating(true);
    try {
      const response = await fetch("/api/contact/update-status", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      const result = await response.json();

      if (result.success) {
        fetchSubmissions();
        // Close the modal after successful update
        setTimeout(() => {
          setSelectedSubmission(null);
          setUpdating(false);
        }, 500); // Small delay to show success
      } else {
        console.error("Update failed:", result.error);
        setUpdating(false);
      }
    } catch (error) {
      console.error("Failed to update status:", error);
      setUpdating(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [pagination.page, statusFilter, searchTerm]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedSubmission) {
        setSelectedSubmission(null);
      }
    };

    if (selectedSubmission) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [selectedSubmission]);

  const getStatusBadge = (status: string) => {
    const variants = {
      new: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      read: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      replied: "bg-green-500/10 text-green-400 border-green-500/20",
      closed: "bg-gray-500/10 text-gray-400 border-gray-500/20",
    };
    return variants[status as keyof typeof variants] || variants.new;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6 relative z-10">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800/95 rounded-xl p-6 hover:bg-slate-700/95 transition-all duration-300 shadow-xl border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Mail className="h-4 w-4 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-white/60">New Messages</p>
              <p className="text-xl font-semibold text-white">
                {
                  submissions.filter((s) => (s.status || "new") === "new")
                    .length
                }
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/95 rounded-xl p-6 hover:bg-slate-700/95 transition-all duration-300 shadow-xl border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <User className="h-4 w-4 text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-white/60">In Progress</p>
              <p className="text-xl font-semibold text-white">
                {
                  submissions.filter((s) => (s.status || "new") === "read")
                    .length
                }
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/95 rounded-xl p-6 hover:bg-slate-700/95 transition-all duration-300 shadow-xl border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Building className="h-4 w-4 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-white/60">Replied</p>
              <p className="text-xl font-semibold text-white">
                {
                  submissions.filter((s) => (s.status || "new") === "replied")
                    .length
                }
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/95 rounded-xl p-6 hover:bg-slate-700/95 transition-all duration-300 shadow-xl border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-500/10 rounded-lg">
              <Calendar className="h-4 w-4 text-gray-400" />
            </div>
            <div>
              <p className="text-sm text-white/60">Closed</p>
              <p className="text-xl font-semibold text-white">
                {
                  submissions.filter((s) => (s.status || "new") === "closed")
                    .length
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-slate-800/95 rounded-xl overflow-hidden shadow-xl border border-slate-700/50 backdrop-blur-sm">
        <div className="p-6 border-b border-white/10">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Contact Submissions
              </h3>
              <p className="text-sm text-white/70">
                View and manage all customer inquiries ({pagination.totalCount}{" "}
                total)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64 bg-slate-700/50 border-slate-600/50 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 focus:bg-slate-700/70"
                />
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40 bg-slate-700/50 border-slate-600/50 text-white focus:bg-slate-700/70">
                  <Filter className="h-4 w-4 mr-2 text-white/40" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem
                    value="all"
                    className="text-white hover:bg-white/10"
                  >
                    All Status
                  </SelectItem>
                  <SelectItem
                    value="new"
                    className="text-white hover:bg-white/10"
                  >
                    New
                  </SelectItem>
                  <SelectItem
                    value="read"
                    className="text-white hover:bg-white/10"
                  >
                    Read
                  </SelectItem>
                  <SelectItem
                    value="replied"
                    className="text-white hover:bg-white/10"
                  >
                    Replied
                  </SelectItem>
                  <SelectItem
                    value="closed"
                    className="text-white hover:bg-white/10"
                  >
                    Closed
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="p-0">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-white/70">Loading submissions...</div>
            </div>
          ) : submissions.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <Mail className="h-12 w-12 text-white/40 mx-auto mb-4" />
                <p className="text-white/70">No submissions found</p>
              </div>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-white/5">
                  <TableHead className="text-white/60">Contact</TableHead>
                  <TableHead className="text-white/60">Subject</TableHead>
                  <TableHead className="text-white/60">Status</TableHead>
                  <TableHead className="text-white/60">Date</TableHead>
                  <TableHead className="text-white/60 w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((submission) => (
                  <TableRow
                    key={submission.id}
                    className="border-white/10 hover:bg-white/10 cursor-pointer bg-slate-800/50"
                    onClick={() => setSelectedSubmission(submission)}
                  >
                    <TableCell>
                      <div className="space-y-1">
                        <p className="font-medium text-white">
                          {submission.name}
                        </p>
                        <p className="text-sm text-white/60">
                          {submission.email}
                        </p>
                        {submission.company && (
                          <p className="text-xs text-white/60">
                            {submission.company}
                          </p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-medium text-white truncate max-w-xs">
                        {submission.subject}
                      </p>
                      <p className="text-sm text-white/60 truncate max-w-xs">
                        {submission.message}
                      </p>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={getStatusBadge(submission.status || "new")}
                      >
                        {submission.status || "new"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-white/60">
                      {formatDate(submission.createdAt)}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-white/70 hover:text-white hover:bg-white/10"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="bg-slate-800 border-slate-700"
                        >
                          <DropdownMenuItem
                            onClick={() => {
                              updateStatus(submission.id, "read");
                              if (selectedSubmission?.id === submission.id) {
                                setSelectedSubmission(null);
                              }
                            }}
                            className="text-white hover:bg-white/10"
                          >
                            Mark as Read
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              updateStatus(submission.id, "replied");
                              if (selectedSubmission?.id === submission.id) {
                                setSelectedSubmission(null);
                              }
                            }}
                            className="text-white hover:bg-white/10"
                          >
                            Mark as Replied
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              updateStatus(submission.id, "closed");
                              if (selectedSubmission?.id === submission.id) {
                                setSelectedSubmission(null);
                              }
                            }}
                            className="text-white hover:bg-white/10"
                          >
                            Mark as Closed
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
              <p className="text-sm text-white/60">
                Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
                {Math.min(
                  pagination.page * pagination.limit,
                  pagination.totalCount
                )}{" "}
                of {pagination.totalCount} results
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setPagination((prev) => ({ ...prev, page: prev.page - 1 }))
                  }
                  disabled={!pagination.hasPrevPage}
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setPagination((prev) => ({ ...prev, page: prev.page + 1 }))
                  }
                  disabled={!pagination.hasNextPage}
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSubmission && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in-0 duration-300"
          style={{ top: "64px" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedSubmission(null);
            }
          }}
        >
          <div className="bg-slate-800/95 rounded-xl w-full max-w-2xl max-h-[calc(100vh-80px)] overflow-y-auto border border-slate-700/50 shadow-2xl transform transition-all duration-300 ease-out animate-in fade-in-0 zoom-in-95">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedSubmission.subject}
                  </h3>
                  <p className="text-white/60">
                    From {selectedSubmission.name} •{" "}
                    {formatDate(selectedSubmission.createdAt)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedSubmission(null)}
                  className="text-white/70 hover:text-white hover:bg-red-500/20 rounded-full w-8 h-8 p-0 transition-all duration-200"
                >
                  ✕
                </Button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-white/60">
                    Email
                  </label>
                  <p className="text-white">{selectedSubmission.email}</p>
                </div>
                {selectedSubmission.company && (
                  <div>
                    <label className="text-sm font-medium text-white/60">
                      Company
                    </label>
                    <p className="text-white">{selectedSubmission.company}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-white/60">
                  Status
                </label>
                <div className="mt-1">
                  <Badge
                    className={getStatusBadge(
                      selectedSubmission.status || "new"
                    )}
                  >
                    {selectedSubmission.status || "new"}
                  </Badge>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-white/60">
                  Message
                </label>
                <div className="mt-2 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-white whitespace-pre-wrap">
                    {selectedSubmission.message}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  onClick={() => updateStatus(selectedSubmission.id, "read")}
                  variant="outline"
                  size="sm"
                  disabled={updating}
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {updating ? "Updating..." : "Mark as Read"}
                </Button>
                <Button
                  onClick={() => updateStatus(selectedSubmission.id, "replied")}
                  variant="outline"
                  size="sm"
                  disabled={updating}
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {updating ? "Updating..." : "Mark as Replied"}
                </Button>
                <Button
                  onClick={() => updateStatus(selectedSubmission.id, "closed")}
                  variant="outline"
                  size="sm"
                  disabled={updating}
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {updating ? "Updating..." : "Close"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
