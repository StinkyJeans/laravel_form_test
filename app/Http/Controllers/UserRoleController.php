<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class UserRoleController extends Controller
{

    public function index(Request $request)
    {
        // Get the value of the 'only_trashed' query parameter
        $onlyTrashed = $request->query('only_trashed');

        if ($onlyTrashed) {
            // Fetch only soft-deleted (archived) users
            $users = User::onlyTrashed()->get();
        } else {
            // Fetch all users, including active and soft-deleted ones
            $users = User::all();
        }

        // Return the users
        return response()->json([
            'users' => $users
        ]);
    }

    public function store()
    {
        try {
            $validated = request()->validate([
                'username' => ['required'],
                'email' => ['required'],
                'password' => ['required'],
                'firstName' => ['required' ],
                'middleName' => ['required'],
                'lastName' => ['required'],
                'name_ext' => ['nullable'],
                'gender' => ['required'],
                'status' => ['required'],

            ]);

            $user = User::create([
                'username' => $validated['username'],
                'email' => $validated['email'],
                'password' => $validated['password'],
                'firstName' => $validated['firstName'],
                'middleName' => $validated['middleName'],
                'lastName' => $validated['lastName'],
                'name_ext' => $validated['name_ext'],
                'gender' => $validated['gender'],
                'status' => $validated['status'],

            ]);

            return response()->json([
                'message' => 'user created successfully!',
                'user' => $user
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation Error',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error: ' . $e->getMessage()
            ], 500);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json([
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        // $user = User::findOrFail($id);
        // return view('user_role.edit', compact('user'));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(User $user)
    {
        try {
            // Validate and get validated data
            $validated = request()->validate([
                'username' => ['required'],
                'email' => ['required'],
                'firstName' => ['required'],
                'middleName' => ['required'],
                'lastName' => ['required'],
                'name_ext' => ['nullable'],
                'gender' => ['required'],
                'status' => ['required']
            ]);

            // Update using validated data
            $user->update($validated);

            return response()->json([
                'message' => 'User updated successfully!',
                'user' => $user->fresh()  // Return refreshed model
            ], 200);

        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation Error',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return void
     */


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->noContent();
    }

    public function deleteMultiple(Request $request)
    {
        $userIds = $request->input('ids'); // Expecting an array of user IDs

        if (empty($userIds)) {
            return response()->json(['success' => false, 'message' => 'No users selected.'], 400);
        }

        // Soft delete users
        $deleted = User::whereIn('id', $userIds)->update(['deleted_at' => now()]);

        if ($deleted) {
            return response()->json(['success' => true, 'message' => 'Users deleted successfully.']);
        } else {
            return response()->json(['success' => false, 'message' => 'No users found to delete.'], 404);
        }
    }




    public function restoreUser($id)
    {
        // Fetch soft-deleted user
        $user = User::onlyTrashed()->find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found or not deleted'], 404);
        }

        // Restore the user
        $user->restore();

        return response()->json(['message' => 'User restored successfully', 'user' => $user]);
    }






}



